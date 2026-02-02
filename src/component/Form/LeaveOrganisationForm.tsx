import DangerousButton from "../UI/Form/DangerousButton.tsx";
import {leaveOrganization} from "../../service/OrganizationApiClient.ts";
import {useMutation} from "@tanstack/react-query";

interface Props {
    organizationId: string;
    recruiterId: string;
}

export default function LeaveOrganisationForm({ organizationId, recruiterId }: Props)
{
    const mutation = useMutation({
        mutationKey: ["leaveOrganization"],
        mutationFn: () => leaveOrganization(organizationId, recruiterId)
    });

    function sendForm() {
        mutation.mutate(undefined, {
            onSuccess() {
                alert("sukces");
            },
            onError(error) {
                alert((error as Error).message);
            },
        });
    }

    return (
        <div className="max-w-xs">
            <DangerousButton
                onClick={sendForm}
                text="Opuść organizację"
            />
        </div>
    )
}