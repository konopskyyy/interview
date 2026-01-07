import Input from "../../component/UI/Form/Input.tsx";
import { useState } from "react";
import SendFormButton from "../../component/UI/Form/SendFormButton.tsx";

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

  function handleSubmitOrganizationCode() {}

  function handleSubmitCreateOrganization() {}

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

            <SendFormButton text="Załóż organizację" />
          </form>
        </div>
        <div className="p-8">Twoje zaproszenia do organizacji</div>
      </div>
    </>
  );
}
