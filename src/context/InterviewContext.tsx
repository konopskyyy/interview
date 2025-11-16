import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface Interview {
  code: string;
  position: string;
}

interface InterviewContextInterface {
  interviews: Interview[];
  setInterviews: React.Dispatch<React.SetStateAction<Interview[]>>;
  addInterview: (interview: Interview) => void;
}

export const InterviewContext = createContext<InterviewContextInterface | null>(
  null,
);

export const InterviewContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [interviews, setInterviews] = useState<Interview[]>([
    { code: "ABC", position: "Hr specialist" },
    { code: "DEF", position: "Software developer" },
  ]);

  function addInterview(interview: Interview) {
    setInterviews((prev) => [...prev, interview]);
  }

  return (
    <InterviewContext.Provider
      value={{ interviews, setInterviews, addInterview }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
