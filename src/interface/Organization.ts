import type { Address } from "./Address.ts";
import type { Membership } from "./Membership.ts";

export interface Organization {
  id: string;
  name: string;
  taxId: string;
  address: Address;
  createdAt: Date;
  updatedAt: Date | null;
  memberships: Membership[];
}
