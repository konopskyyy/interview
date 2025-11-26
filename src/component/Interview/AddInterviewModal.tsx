import BaseModal from "../UI/Modal/BaseModal.tsx";
import { useContext, useState } from "react";
import { InterviewContext } from "../../context/InterviewContext.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";
import Input from "../UI/Form/Input.tsx";

interface Recruiter {
  id: string;
  name: string;
}

const availableRecruiters: Recruiter[] = [
  { id: "1", name: "Anna Kowalska" },
  { id: "2", name: "Jan Nowak" },
  { id: "3", name: "Ewa Wiśniewska" },
  { id: "4", name: "Marek Zalewski" },
];

export default function AddInterviewModal() {
  const context = useContext(InterviewContext);
  const [code, setCode] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [selectedRecruiterId, setSelectedRecruiterId] =
    useState<string>("none");
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

  if (!context) {
    return null;
  }

  function handleAddRecruiter() {
    if (selectedRecruiterId === "none") return;

    const recruiterToAdd = availableRecruiters.find(
      (r) => r.id === selectedRecruiterId,
    );
    if (!recruiterToAdd) return;

    // unikaj duplikowania
    if (recruiters.some((r) => r.id === recruiterToAdd.id)) return;

    setRecruiters((prev) => [...prev, recruiterToAdd]);
    setSelectedRecruiterId("none");
  }

  function handleRemoveRecruiter(id: string) {
    setRecruiters((prev) => prev.filter((r) => r.id !== id));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    context?.addInterview({ code, position, recruiters });

    setCode("");
    setPosition("");
    setRecruiters([]);
    setSelectedRecruiterId("none");
  }

  return (
    <BaseModal title="Dodaj rozmowę">
      <h2 className="right-0 text-xl font-semibold mb-4">Dodaj rozmowę</h2>
      <p>Formularz do dodawania rozmowy...</p>

      <form onSubmit={handleSubmit}>
        <Input fieldName="code" fieldValue={code} setFieldValue={setCode} />
        <Input
          fieldName="position"
          fieldValue={position}
          setFieldValue={setPosition}
        />

        <div>
          <h3>Dodaj Rekrutera z listy</h3>
          <select
            value={selectedRecruiterId}
            onChange={(e) => setSelectedRecruiterId(e.target.value)}
          >
            <option value="none" disabled>
              -- wybierz --
            </option>
            {availableRecruiters.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddRecruiter}>
            Dodaj rekrutera
          </button>
        </div>

        <ul>
          {recruiters.map((r) => (
            <li key={r.id}>
              {r.name}{" "}
              <button type="button" onClick={() => handleRemoveRecruiter(r.id)}>
                Usuń
              </button>
            </li>
          ))}
        </ul>

        <SendFormButton text="Wyślij" />
      </form>
    </BaseModal>
  );
}
