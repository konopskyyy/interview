import AccordionChild from "../../component/UI/Accordion/AccordionChild.tsx";
import AccordionParent from "../../component/UI/Accordion/AccordionParent.tsx";

export default function InterviewList()
{
    return (
        <>
            <AccordionParent title="Rekrutacje rozpoczęte">
                <AccordionChild title="title child 1" text="test child 1"/>
                <AccordionChild title="title child 2" text="test child 2"/>
            </AccordionParent>

            <AccordionParent title="Rekrutacje zakończone">
                <AccordionChild title="title child 1" text="test child 1"/>
                <AccordionChild title="title child 2" text="test child 2"/>
            </AccordionParent>
        </>
    );
}