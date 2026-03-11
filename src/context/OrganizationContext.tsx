/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";

interface OrganizationContextInterface {
  organizationId: string | null;
  getOrganizationId: () => string | null;
  setOrganizationId: (id: string | null) => void;
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
  const [organizationId, setOrganizationIdState] = useState<string | null>(() =>
    sessionStorage.getItem("organization_id"),
  );

  const getOrganizationId = useCallback((): string | null => {
    return organizationId;
  }, [organizationId]);

  const setOrganizationId = useCallback((id: string | null): void => {
    if (id) {
      sessionStorage.setItem("organization_id", id);
    } else {
      sessionStorage.removeItem("organization_id");
    }
    setOrganizationIdState(id);
  }, []);

  const leaveOrganization = useCallback((): void => {
    sessionStorage.removeItem("organization_id");
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
