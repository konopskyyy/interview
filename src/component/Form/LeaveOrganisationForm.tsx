import DangerousButton from "../UI/Form/DangerousButton.tsx";
import { leaveOrganization } from "../../service/OrganizationApiClient.ts";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { OrganizationContext } from "../../context/OrganizationContext.tsx";

interface Props {
  organizationId: string;
  recruiterId: string;
}

export default function LeaveOrganisationForm({
  organizationId,
  recruiterId,
}: Props) {
  const orgContext = useContext(OrganizationContext);

  const mutation = useMutation({
    mutationKey: ["leaveOrganization"],
    mutationFn: () => leaveOrganization(organizationId, recruiterId),
  });

  function sendForm() {
    mutation.mutate(undefined, {
      onSuccess() {
        if (orgContext) {
          orgContext.leaveOrganization();
        }
        window.location.reload();
      },
      onError(error) {
        alert((error as Error).message);
      },
    });
  }

  return (
    <div className="max-w-xs">
      <DangerousButton onClick={sendForm} text="Opuść organizację" />
    </div>
  );
}
