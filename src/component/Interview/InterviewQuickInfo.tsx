import AddRecruiterModal from "./AddRecruiterModal.tsx";
import AddCandidateModal from "./AddCandidateModal.tsx";

export default function InterviewQuickInfo() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <AddRecruiterModal />
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
