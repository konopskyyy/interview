/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import { UserContext } from "./UserContext.tsx";

interface OrganizationContextInterface {
  organizationId: string | null;
  getOrganizationId: () => string;
  setOrganizationId: (id: string) => void;
  leaveOrganization: () => void;
}

interface OrganizationContextProviderProps {
  children: ReactNode;
}

export const OrganizationContext =
  createContext<OrganizationContextInterface | null>(null);

export function OrganizationContextProvider({
  children,
}: OrganizationContextProviderProps) {
  const userContext = useContext(UserContext);
  const userOrgId = userContext?.user?.organizationId;

  const [organizationId, setOrganizationIdState] = useState<string | null>(
    () => {
      return sessionStorage.getItem("organization_id");
    },
  );

  useEffect(() => {
    if (userOrgId && !sessionStorage.getItem("organizationId")) {
      sessionStorage.setItem("organization_id", userOrgId);
      setOrganizationIdState(userOrgId);
    }
  }, [userOrgId]);

  const getOrganizationId = useCallback((): string => {
    return organizationId || "";
  }, [organizationId]);

  const setOrganizationId = useCallback((id: string): void => {
    sessionStorage.setItem("organizationId", id);
    setOrganizationIdState(id);
  }, []);

  const leaveOrganization = useCallback((): void => {
    sessionStorage.removeItem("organizationId");
    setOrganizationIdState(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      organizationId,
      getOrganizationId,
      setOrganizationId,
      leaveOrganization,
    }),
    [organizationId, getOrganizationId, setOrganizationId, leaveOrganization],
  );

  return (
    <OrganizationContext.Provider value={contextValue}>
      {children}
    </OrganizationContext.Provider>
  );
}
