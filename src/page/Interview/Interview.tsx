import {useParams} from "react-router";
import type {Interview} from "../../context/InterviewContext.tsx";

export default function Interview() {
    const params = useParams();


    //todo to z api
    const interview: Interview = {
        id: params.id,
        position: "aaa",
        recruiters: [
            {
                id: "1",
                name: "Eryk"
            },
            {
                id: "2",
                name: "Andżej"
            }
        ],
        candidates: [
            {
                id: "1",
                name: "Fryderyk"
            },
            {
                id: "2",
                name: "Brajan"
            }
        ]
    };

    return (
        <>
        <h2>Id rekrutacji: {interview.id}</h2>
        <h2>stanowisko: {interview.position}</h2>
        <h2>Rekruterzy: {interview.recruiters.map(recruiter => recruiter.name + " ")}</h2>
        </>
    )

}