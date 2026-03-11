/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext.tsx";

interface UserInterface {
  username: string;
  userId: string;
  organizationId: string;
}

interface UserContextInterface {
  user: UserInterface | null;
  getUsername: () => string;
  getUserId: () => string;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextInterface | null>(null);

function decode(token: string): UserInterface | null {
  try {
    const payloadBase64 = token.split(".")[1];
    const base64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const authContext = useContext(AuthContext);
  const token = authContext?.token;

  const [user, setUser] = useState<UserInterface | null>(() => {
    return token ? decode(token) : null;
  });

  const prevUserRef = useRef<UserInterface | null | undefined>(undefined);

  useEffect(() => {
    if (token) {
      const decodedUser = decode(token);
      // Tylko przy realnym logowaniu (poprzedni stan to null = wylogowany),
      // nie przy odświeżeniu strony (poprzedni stan to undefined = pierwsze uruchomienie)
      if (prevUserRef.current === null && decodedUser?.organizationId) {
        sessionStorage.setItem("organization_id", decodedUser.organizationId);
      }
      prevUserRef.current = decodedUser;
      setUser(decodedUser);
    } else {
      prevUserRef.current = null;
      setUser(null);
    }
  }, [token]);

  const getUsername = useCallback((): string => {
    return user?.username || "";
  }, [user]);

  const getUserId = useCallback((): string => {
    return user?.userId || "";
  }, [user]);

  const contextValue = useMemo(
    () => ({
      user,
      getUsername,
      getUserId,
    }),
    [user, getUsername, getUserId],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
