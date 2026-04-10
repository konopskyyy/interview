import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext.tsx";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext.tsx";
import DangerousButton from "../../component/UI/Form/DangerousButton.tsx";
import { leaveOrganization } from "../../service/OrganizationApiClient.ts";

type Props = {
  organizationId: string;
  onLeaveSuccess?: () => void | Promise<void>;
};

export default function AccountLeaveOrganization(organization: Props) {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext?.isAuthenticated) {
      navigate("/");
    }
  }, [authContext, navigate]);

  return (
    <DangerousButton
      text="Opuść"
      className="w-max hover:cursor-pointer"
      onClick={async () => {
        await leaveOrganization(
          organization.organizationId,
          context?.getUserId() ?? "",
        );
        await organization.onLeaveSuccess?.();
      }}
    />
  );
}
