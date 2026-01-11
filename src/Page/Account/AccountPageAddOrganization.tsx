import Input from "../../component/UI/Form/Input.tsx";
import DangerousButton from "../../component/UI/Form/DangerousButton.tsx";
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
    <div className="space-y-8">
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

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Twoje zaproszenia do organizacji
        </h3>

        {/* Mock Invitation Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png?20231016092137"
              alt="Logo firmy"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">LEGO</h4>
              <p className="text-sm text-gray-500">
                Zaprasza Cię do dołączenia do organizacji
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none sm:w-32">
              <DangerousButton
                onClick={() => alert("Odrzucono zaproszenie")}
                text="Odrzuć"
              />
            </div>
            <button
              onClick={() => alert("Zaakceptowano zaproszenie")}
              className="flex-1 sm:flex-none sm:w-32 inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Zaakceptuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
