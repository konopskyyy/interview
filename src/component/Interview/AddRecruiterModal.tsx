import BaseModal from "../UI/Modal/BaseModal.tsx";
import { useState, useContext } from "react";
import type { ChangeEvent } from "react";
import { InterviewContext } from "../../context/InterviewContext.tsx";

interface Recruiter {
  id: string;
  name: string;
}

interface AddRecruiterModalProps {
  interviewCode: string;
  availableRecruiters: Recruiter[];
}

export default function AddRecruiterModal({
  interviewCode,
  availableRecruiters,
}: AddRecruiterModalProps) {
  const context = useContext(InterviewContext);
  const [selectedId, setSelectedId] = useState<string>("none");

  if (!context) return null;

  const { addRecruiter } = context;

  const handleAddRecruiter = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedId(id);
    if (id === "none") return;

    const recruiter = availableRecruiters.find((r) => r.id === id);
    if (recruiter) {
      addRecruiter(interviewCode, recruiter);
      setSelectedId("none");
    }
  };

  return (
    <BaseModal title="Dodaj Rekrutera">
      <p>Wybierz z listy</p>
      <select onChange={handleAddRecruiter} value={selectedId}>
        <option value="none" disabled>
          -- wybierz --
        </option>
        {availableRecruiters.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>
    </BaseModal>
  );
}
