/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface Interview {
  code: string;
  position: string;
  recruiters: Recruiter[];
}

interface Recruiter {
  id: string;
  name: string;
}

interface InterviewContextInterface {
  interviews: Interview[];
  setInterviews: React.Dispatch<React.SetStateAction<Interview[]>>;
  addInterview: (interview: Interview) => void;
  addRecruiter: (code: string, recruiter: Recruiter) => void;
  removeRecruiter: (code: string, recruiterId: string) => void;
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
    {
      code: "ABC",
      position: "Hr specialist",
      recruiters: [
        { id: "5", name: "Edward" },
        { id: "6", name: "Enrike" },
      ],
    },
    {
      code: "DEF",
      position: "Software developer",
      recruiters: [
        { id: "7", name: "Andrzej" },
        { id: "8", name: "Pietrek" },
      ],
    },
  ]);

  function addInterview(interview: Interview) {
    setInterviews((prev) => [...prev, interview]);
  }

  function addRecruiter(code: string, recruiter: Recruiter) {
    setInterviews((prev) =>
      prev.map((interview) =>
        interview.code === code
          ? { ...interview, recruiters: [...interview.recruiters, recruiter] }
          : interview,
      ),
    );
  }

  function removeRecruiter(code: string, recruiterId: string) {
    setInterviews((prev) =>
      prev.map((interview) =>
        interview.code === code
          ? {
              ...interview,
              recruiters: interview.recruiters.filter(
                (r) => r.id !== recruiterId,
              ),
            }
          : interview,
      ),
    );
  }

  return (
    <InterviewContext.Provider
      value={{
        interviews,
        setInterviews,
        addInterview,
        addRecruiter,
        removeRecruiter,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
