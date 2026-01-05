import Input from "../../component/UI/Form/Input.tsx";
import { useState } from "react";
import SendFormButton from "../../component/UI/Form/SendFormButton.tsx";

export default function AccountPageAddOrganization() {
  const [newOrganizationCode, setNewOrganizationCode] = useState<string>("");
  return (
    <>
      <div className="grid grid-cols-2 divide-x divide-gray-300 h-64">
        <div className="p-8">
          <form>
            <Input
              fieldName="Podaj kod organizacji"
              fieldValue={newOrganizationCode}
              setFieldValue={setNewOrganizationCode}
            />
            <SendFormButton text="Poproś o udział w organizacji " />
          </form>
          <div>... lub</div>
          <form>Załóż organizację:</form>
        </div>
        <div className="p-8">Twoje zaproszenia do organizacji</div>
      </div>
    </>
  );
}
