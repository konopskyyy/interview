import AddRecruiterModal from "./AddRecruiterModal.tsx";
import AddCandidateModal from "./AddCandidateModal.tsx";
import {useState} from "react";

export default function InterviewQuickInfo() {
    const [recruiters, setRecruiters] = useState([]);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
            {recruiters.map(recruiter => {
                return <p>{recruiter}</p>
            })}

          <AddRecruiterModal recruiters={recruiters} setRecruiters={setRecruiters} />
        </div>
        <div>
          <AddCandidateModal />
        </div>
        <div>
          a tu bedzie jakis skrot
        </div>
      </div>
    </>
  );
}
