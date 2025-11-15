import BaseModal from "../UI/Modal/BaseModal.tsx";
import { useState } from "react";

export default function AddRecruiterModal(props) {
  const { recruiters, setRecruiters } = props;
  const [disabledNone, setDisabledNone] = useState(false);

  function handleAddRecruiter(e): void {
    setDisabledNone(true);
    const newRecruiters = [...recruiters, e.target.value];
    setRecruiters(newRecruiters);
  }

  function handleRemoveRecruiter(key: number): void {
    setDisabledNone(true);
    const newRecruiters = recruiters.filter((recruiter, index) => index != key);
    setRecruiters(newRecruiters);
  }

  return (
    <BaseModal title="Dodaj rekrutera">
      <h2 className="text-xl font-semibold mb-4">Dodaj Rekrutera</h2>
      <p>Rekruterzy:</p>
      {recruiters.map((recruiter, key) => {
        return (
          <>
            <div>
              {recruiter}{" "}
              <button onClick={() => handleRemoveRecruiter(key)}>X</button>
            </div>
          </>
        );
      })}

      <p>Wybierz z listy</p>
      <form>
        <select onChange={handleAddRecruiter} value="none">
          <option disabled={disabledNone}>none</option>
          <option>aaa</option>
          <option>bbb</option>
        </select>
      </form>
    </BaseModal>
  );
}
