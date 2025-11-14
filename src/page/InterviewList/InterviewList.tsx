import AccordionChild from "../../component/UI/Accordion/AccordionChild.tsx";
import AccordionParent from "../../component/UI/Accordion/AccordionParent.tsx";
import InterviewQuickInfo from "../../component/Interview/InterviewQuickInfo.tsx";

export default function InterviewList() {
  return (
    <>
      <AccordionParent title="Rekrutacje rozpoczęte">
        <AccordionChild title="title child 1">
          <InterviewQuickInfo />
        </AccordionChild>
        <AccordionChild title="title child 2">
          <InterviewQuickInfo />
        </AccordionChild>
      </AccordionParent>

      <AccordionParent title="Rekrutacje zakończone">
        <AccordionChild title="title child 1">
          <InterviewQuickInfo />
          </AccordionChild>
        <AccordionChild title="title child 2">
          <InterviewQuickInfo />
        </AccordionChild>
      </AccordionParent>
    </>
  );
}
