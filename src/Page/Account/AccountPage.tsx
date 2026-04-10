import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext.tsx";
import { AuthContext } from "../../context/AuthContext.tsx";
import { OrganizationContext } from "../../context/OrganizationContext.tsx";
import { useNavigate } from "react-router";
import AccountPageOrganizationData from "./AccountPageOrganizationData.tsx";
import AccountPageAddOrganization from "./AccountPageAddOrganization.tsx";
import RemoveAccountForm from "../../component/Form/RemoveAccountForm.tsx";
import ChangePasswordForm from "../../component/Form/ChangePasswordForm.tsx";
import AccountInvitationOrganization from "./AccountInvitationOrganization.tsx";
import OrganizationList from "../Organization/OrganizationList.tsx";

export default function AccountPage() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const orgContext = useContext(OrganizationContext);
  const [currentTab, setCurrentTab] = useState<string>("profile");
  const [orgNotFound, setOrgNotFound] = useState<boolean>(false);
  const orgId = orgContext?.getOrganizationId();

  useEffect(() => {
    setOrgNotFound(false);
  }, [orgId]);

  const activeTab =
    "border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700";
  const inactiveTab =
    "border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700";
  useEffect(() => {
    if (!authContext?.isAuthenticated) {
      navigate("/");
    }
  }, [authContext, navigate]);

  if (!authContext?.isAuthenticated || !context?.user) {
    return null;
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-xl text-gray-900">
        <div className="-mb-px border-b border-gray-200">
          <div role="tablist" className="flex gap-1">
            <button
              onClick={() => setCurrentTab("profile")}
              role="tab"
              aria-selected={currentTab == "profile"}
              className={currentTab == "profile" ? activeTab : inactiveTab}
            >
              Profile
            </button>

            <button
              onClick={() => setCurrentTab("organization")}
              role="tab"
              aria-selected={currentTab == "organization"}
              className={currentTab == "organization" ? activeTab : inactiveTab}
            >
              Organization
            </button>
          </div>
        </div>

        <div role="tabpanel" className="mt-4">
          <div className="text-gray-700">
            {currentTab == "profile" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <fieldset className="border border-gray-300 p-4 rounded-md h-full flex flex-col">
                    <legend className="px-2 text-gray-700">Dane osobowe</legend>
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium text-gray-800">E-mail:</span>{" "}
                      {context.user.username}
                    </p>
                    <RemoveAccountForm />
                  </fieldset>
                </div>
                <div>
                  <ChangePasswordForm />
                </div>
              </div>
            )}

            {currentTab == "organization" && orgId == null && (
              <OrganizationList />
            )}

            {currentTab == "organization" && <AccountInvitationOrganization />}

            {currentTab == "organization" && (orgNotFound || orgId == null) && (
              <AccountPageAddOrganization />
            )}

            {currentTab == "organization" && !orgNotFound && orgId != null && (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => orgContext?.setOrganizationId(null)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Wroc do listy organizacji
                </button>
                <AccountPageOrganizationData
                  organizationId={orgId}
                  recruiterId={context.getUserId()}
                  onNotFound={() => setOrgNotFound(true)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
