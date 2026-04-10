import Input from "../../component/UI/Form/Input.tsx";
import { useState, type FormEvent } from "react";
import SendFormButton from "../../component/UI/Form/SendFormButton.tsx";
import { createOrganization } from "../../service/OrganizationApiClient.ts";
import { useMutation } from "@tanstack/react-query";
import type { organizationBody } from "../../service/OrganizationApiClient.ts";
import { useContext } from "react";
import { OrganizationContext } from "../../context/OrganizationContext.tsx";

export default function AccountPageAddOrganization() {
  const orgContext = useContext(OrganizationContext);
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

  function handleSubmitOrganizationCode() {}

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
          country: addressCountry,
        },
        recruiters: [],
        candidates: [],
      },
      {
        onSuccess(data) {
          if (data && data.uuid) {
            orgContext?.setOrganizationId(data.uuid);
          }
        },
        onError(error) {
          alert((error as Error).message);
        },
      },
    );
  }

  return (
    <div className="space-y-8 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <fieldset className="border border-gray-300 p-4 rounded-md h-full">
            <legend className="px-2 text-gray-700">
              Podaj kod organizacji
            </legend>
            <form onSubmit={handleSubmitOrganizationCode} className="space-y-4">
              <Input
                fieldName="Kod organizacji"
                fieldValue={newOrganizationCode}
                setFieldValue={setNewOrganizationCode}
              />
              <SendFormButton text="Poproś o udział w organizacji" />
            </form>
          </fieldset>
        </div>
        <div>
          <fieldset className="border border-gray-300 p-4 rounded-md h-full">
            <legend className="px-2 text-gray-700">Załóż organizację</legend>
            <form
              onSubmit={handleSubmitCreateOrganization}
              className="space-y-4"
            >
              <Input
                fieldName="Nazwa organizacji"
                fieldValue={newOrganizationName}
                setFieldValue={setNewOrganizationName}
              />
              <Input
                fieldName="Logo"
                fieldValue={logo}
                setFieldValue={setLogo}
              />
              <Input
                fieldName="NIP"
                fieldValue={taxId}
                setFieldValue={setTaxId}
              />
              <p className="font-medium text-gray-700 pt-2">Adres:</p>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  fieldName="Ulica"
                  fieldValue={addressStreet}
                  setFieldValue={setAddressStreet}
                />
                <Input
                  fieldName="Nr budynku"
                  fieldValue={addressBuildingNo}
                  setFieldValue={setAddressBuildingNo}
                />
                <Input
                  fieldName="Nr lokalu"
                  fieldValue={addressApartmentNo}
                  setFieldValue={setAddressApartmentNo}
                />
                <Input
                  fieldName="Miasto"
                  fieldValue={addressCity}
                  setFieldValue={setAddressCity}
                />
                <Input
                  fieldName="Kod pocztowy"
                  fieldValue={addressPostalCode}
                  setFieldValue={setAddressPostalCode}
                />
                <Input
                  fieldName="Kraj"
                  fieldValue={addressCountry}
                  setFieldValue={setAddressCountry}
                />
              </div>

              <div className="pt-4">
                <SendFormButton
                  disabled={isLoading}
                  text={isLoading ? "Tworzenie..." : "Stwórz organizację"}
                />
              </div>
              {isError && (
                <p style={{ color: "red" }} className="text-sm mt-2">
                  Błąd: {(error as Error)?.message}
                </p>
              )}
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
