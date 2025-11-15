/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";

interface UserInterface {
  username: string;
}

interface UserContextInterface {
  user: UserInterface | null;
  isLogged: () => boolean;
  getUsername: () => string;
  login: (token: string) => void;
  logout: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextInterface | null>(null);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserInterface | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (token) {
      setUser(decode(token));
    }
  }, []);

  function isLogged(): boolean {
    return user !== null;
  }

  function logout(): void {
    localStorage.removeItem("user_token");
    setUser(null);
    navigate("/");
  }

  function getUsername(): string {
    return user?.username || "";
  }

  function decode(token: string): UserInterface {
    const payloadBase64 = token.split(".")[1];
    const base64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  }

  function login(token: string) {
    localStorage.setItem("user_token", token);
    setUser(decode(token));
  }

  return (
    <UserContext.Provider
      value={{ user, isLogged, getUsername, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
