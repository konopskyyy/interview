import BaseModal from "../UI/Modal/BaseModal.tsx";
import {useContext} from "react";
import {InterviewContext} from "../../context/InterviewContext.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";

export default function AddInterviewModal() {
  const context = useContext(InterviewContext);

  if (!context) {
    return null;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    context.addInterview({ code: "XYZ", position: "eee" });
  }

  return (
    <BaseModal title="Dodaj rozmowę">
      <h2 className="right-0 text-xl font-semibold mb-4">Dodaj rozmowę</h2>
      <p>Formularz do dodawania kandydata...</p>

      <form onSubmit={handleSubmit}>
          <SendFormButton text="Wyslij" />
      </form>
    </BaseModal>
  );
}
