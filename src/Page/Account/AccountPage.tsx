import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext.tsx";
import { useNavigate } from "react-router";
import AccountPageOrganizationData from "./AccountPageOrganizationData.tsx";
import AccountPageAddOrganization from "./AccountPageAddOrganization.tsx";
import ChangePasswordForm from "../../component/User/ChangePassword/ChangePasswordForm.tsx";
import RemoveAccountForm from "../../component/User/Remove/RemoveAccountForm.tsx";

export default function AccountPage() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const [currentTab, setCurrentTab] = useState<string>("profile");

  const activeTab =
    "border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700";
  const inactiveTab =
    "border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700";
  useEffect(() => {
    if (!context || !context.user) {
      navigate("/");
    }
  }, [context, navigate]);

  if (!context || !context.user) {
    return null;
  }

  return (
    <>
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
        <p className="text-gray-700">

          {currentTab == "profile" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <fieldset className="border border-gray-300 p-4 rounded-md h-full flex flex-col">
                  <legend className="px-2 text-gray-700">Dane osobowe</legend>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-gray-800">E-mail:</span> {context.user.username}
                  </p>
                  <RemoveAccountForm />
                </fieldset>
              </div>
              <div>
                <ChangePasswordForm />
              </div>
            </div>
          )}

          {currentTab == "organization" && !context.getOrganizationId() && (
            <AccountPageAddOrganization />
          )}

          {currentTab == "organization" && context.getOrganizationId() && (
            <AccountPageOrganizationData />
          )}
        </p>
      </div>
    </>
  );
}
