import BaseModal from "../UI/Modal/BaseModal.tsx";
import { useContext, useState } from "react";
import { InterviewContext } from "../../context/InterviewContext.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";
import Input from "../UI/Form/Input.tsx";

export default function AddInterviewModal() {
  const context = useContext(InterviewContext);
  const [code, setCode] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  if (!context) {
    return null;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    context!.addInterview({ code: code, position: position });
  }

  return (
    <BaseModal title="Dodaj rozmowę">
      <h2 className="right-0 text-xl font-semibold mb-4">Dodaj rozmowę</h2>
      <p>Formularz do dodawania kandydata...</p>

      <form onSubmit={handleSubmit}>
        <Input fieldName="code" name={code} setName={setCode} />
        <Input fieldName="position" name={position} setName={setPosition} />
        <SendFormButton text="Wyslij" />
      </form>
    </BaseModal>
  );
}
