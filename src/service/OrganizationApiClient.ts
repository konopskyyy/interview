import { post, remove } from "./GenericApiClient.ts";

const BASE_URL = "https://questions.tojest.dev/api/";
export type organizationBody = {
  name: string;
  logo: string;
  taxId: string;
  address: {
    street: string;
    buildingNo: string;
    apartmentNo: string;
    city: string;
    postalCode: string;
    country: string;
  };
  recruiters: string[];
  candidates: string[];
};

export function createOrganization(organization: organizationBody) {
  return post(BASE_URL + "organization", organization, "Błąd tworzenia");
}

export function leaveOrganization(organizationId: string, recruiterId: string) {
  return remove(
    BASE_URL + "organization/" + organizationId + "/recruiter/" + recruiterId,
    "Błąd odejścia",
  );
}
