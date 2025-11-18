import AddRecruiterModal from "./AddRecruiterModal.tsx";
import AddCandidateModal from "./AddCandidateModal.tsx";
import {
  type Interview,
  InterviewContext,
} from "../../context/InterviewContext.tsx";
import { useContext } from "react";

interface InterviewQuickInfoProps {
  interview: Interview;
}

const availableRecruiters = [
  { id: "1", name: "Anna Kowalska" },
  { id: "2", name: "Jan Nowak" },
  { id: "3", name: "Ewa Wiśniewska" },
  { id: "4", name: "Marek Zalewski" },
];

export default function InterviewQuickInfo({
  interview,
}: InterviewQuickInfoProps) {
  const context = useContext(InterviewContext);
  if (!context) return null;
  if (!interview) return null;

  const { removeRecruiter } = context;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          {interview.recruiters?.map((recruiter) => (
            <p key={recruiter.id}>
              {recruiter.id} {recruiter.name}{" "}
              <button
                onClick={() => removeRecruiter(interview.code, recruiter.id)}
              >
                X
              </button>
            </p>
          ))}

          <AddRecruiterModal
            interviewCode={interview.code}
            availableRecruiters={availableRecruiters}
          />
        </div>
        <div>
          <AddCandidateModal />
        </div>
        <div>a tu bedzie jakis skrot</div>
      </div>
    </>
  );
}
