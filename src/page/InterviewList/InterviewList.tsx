import AccordionChild from "../../component/UI/Accordion/AccordionChild.tsx";
import AccordionParent from "../../component/UI/Accordion/AccordionParent.tsx";
import InterviewQuickInfo from "../../component/Interview/InterviewQuickInfo.tsx";
import AddInterviewModal from "../../component/Interview/AddInterviewModal.tsx";
import { useContext } from "react";
import { InterviewContext } from "../../context/InterviewContext.tsx";

export default function InterviewList() {
  const context = useContext(InterviewContext);

  if (!context) {
    return null;
  }

  const interviews = context.interviews;

  return (
    <>
      <AddInterviewModal />
      <AccordionParent title="Rekrutacje rozpoczęte">
        {interviews.map((interview) => {
          return (
            <AccordionChild title={interview.code + " - " + interview.position}>
              <InterviewQuickInfo interview={interview} />
            </AccordionChild>
          );
        })}
      </AccordionParent>

      <AccordionParent title="Rekrutacje zakończone">
        {/*<AccordionChild title="title child 1">*/}
        {/*  <InterviewQuickInfo />*/}
        {/*</AccordionChild>*/}
        {/*<AccordionChild title="title child 2">*/}
        {/*  <InterviewQuickInfo />*/}
        {/*</AccordionChild>*/}
      </AccordionParent>
    </>
  );
}
