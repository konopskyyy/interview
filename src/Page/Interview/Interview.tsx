import { useParams } from "react-router";
import type { Interview } from "../../context/InterviewContext.tsx";

export default function Interview() {
  const params = useParams();

  //todo to z api
  const interview: Interview = {
    id: params.id,
    code: "XYZ-1",
    position: "aaa",
    recruiters: [
      {
        id: "1",
        name: "Eryk",
      },
      {
        id: "2",
        name: "Andżej",
      },
    ],
    candidates: [
      {
        id: "1",
        name: "Fryderyk",
      },
      {
        id: "2",
        name: "Brajan",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
      <h2 className="text-xl font-bold mb-4">Id rekrutacji: {interview.id}</h2>
      <h2 className="text-lg mb-2">
        Stanowisko: <span className="font-medium">{interview.position}</span>
      </h2>
      <h2 className="text-lg">
        Rekruterzy:{" "}
        <span className="font-medium">
          {interview.recruiters.map((recruiter) => recruiter.name).join(", ")}
        </span>
      </h2>
    </div>
  );
}
