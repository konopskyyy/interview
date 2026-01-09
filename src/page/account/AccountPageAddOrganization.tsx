import Input from "../../component/UI/Form/Input.tsx";
import { useState, type FormEvent } from "react";
import SendFormButton from "../../component/UI/Form/SendFormButton.tsx";
import { createOrganization } from "../../service/OrganizationApiClient.ts";
import { useMutation } from "@tanstack/react-query";
import type { organizationBody } from "../../service/OrganizationApiClient.ts";

export default function AccountPageAddOrganization() {
  const [newOrganizationCode, setNewOrganizationCode] = useState<string>("");
  const [newOrganizationName, setNewOrganizationName] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [taxId, setTaxId] = useState<string>("");
  const [addressStreet, setAddressStreet] = useState<string>("");
  const [addressBuildingNo, setAddressBuildingNo] = useState<string>("");
  const [addressApartmentNo, setAddressApartmentNo] = useState<string>("");
  const [addressCity, setAddressCity] = useState<string>("");
  const [addressPostalCode, setAddressPostalCode] = useState<string>("");
  const [addressCountry, setAddressCountry] = useState<string>("Polska");

  const mutation = useMutation({
    mutationKey: ["createOrganization"],
    mutationFn: (organization: organizationBody) =>
      createOrganization(organization),
  });

  const isLoading = mutation.status === "pending";
  const isError = mutation.status === "error";
  const error = mutation.error;

  function handleSubmitOrganizationCode() { }

  function handleSubmitCreateOrganization(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(
      {
        name: newOrganizationName,
        logo: logo,
        taxId: taxId,
        address: {
          street: addressStreet,
          buildingNo: addressBuildingNo,
          apartmentNo: addressApartmentNo,
          city: addressCity,
          postalCode: addressPostalCode,
          country: addressCountry
        },
        recruiters: [],
        candidates: []
      },
      {
        onSuccess() {
          alert("sukces");
        },
        onError(error) {
          alert((error as Error).message);
        },
      },
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 divide-x divide-gray-300 h-64">
        <div className="p-8">
          <form onSubmit={handleSubmitOrganizationCode}>
            <Input
              fieldName="Podaj kod organizacji"
              fieldValue={newOrganizationCode}
              setFieldValue={setNewOrganizationCode}
            />
            <SendFormButton text="Poproś o udział w organizacji " />
          </form>
          <div>... lub</div>
          <p>Załóż organizację:</p>
          <form onSubmit={handleSubmitCreateOrganization}>
            <Input
              fieldName="New organization name"
              fieldValue={newOrganizationName}
              setFieldValue={setNewOrganizationName}
            />
            <Input fieldName="logo" fieldValue={logo} setFieldValue={setLogo} />
            <Input
              fieldName="nip"
              fieldValue={taxId}
              setFieldValue={setTaxId}
            />
            <Input
              fieldName="address street"
              fieldValue={addressStreet}
              setFieldValue={setAddressStreet}
            />

            <Input
              fieldName="address building no"
              fieldValue={addressBuildingNo}
              setFieldValue={setAddressBuildingNo}
            />

            <Input
              fieldName="address apartment no"
              fieldValue={addressApartmentNo}
              setFieldValue={setAddressApartmentNo}
            />

            <Input
              fieldName="address city"
              fieldValue={addressCity}
              setFieldValue={setAddressCity}
            />

            <Input
              fieldName="address postal code"
              fieldValue={addressPostalCode}
              setFieldValue={setAddressPostalCode}
            />

            <Input
              fieldName="address country"
              fieldValue={addressCountry}
              setFieldValue={setAddressCountry}
            />

            <SendFormButton
              disabled={isLoading}
              text={isLoading ? "Czekaj..." : "Stwórz organizację"}
            />
            {isError && (
              <p style={{ color: "red" }}>Błąd: {(error as Error)?.message}</p>
            )}
          </form>
        </div>
        <div className="p-8">Twoje zaproszenia do organizacji</div>
      </div>
    </>
  );
}
