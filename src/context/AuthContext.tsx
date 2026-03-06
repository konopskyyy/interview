/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { logout as apiLogout } from "../service/UserApiClient.ts";

interface AuthContextInterface {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(() =>
    sessionStorage.getItem("user_token"),
  );
  const navigate = useNavigate();

  const login = useCallback((newToken: string) => {
    sessionStorage.setItem("user_token", newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiLogout({});
    } catch (error) {
      console.error("Wystąpił błąd podczas wylogowywania:", error);
    }

    sessionStorage.removeItem("user_token");
    sessionStorage.removeItem("organization_id");
    setToken(null);
    navigate("/");
  }, [navigate]);

  const contextValue = useMemo(
    () => ({
      token,
      isAuthenticated: token !== null,
      login,
      logout,
    }),
    [token, login, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
