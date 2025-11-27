import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

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
      <h2>Nazwa użytkownika: {context.user.username}</h2>

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
          {currentTab == "profile" && <h2>panel użytkownika</h2>}
          {currentTab == "organization" && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap"></td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png?20231016092137"
                          className="w-50 h-50 rounded-full object-cover"
                          alt="Logo firmy"
                        />{" "}
                      </td>
                    </tr>

                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Nazwa firmy
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        W gorącej wodzie kompany
                      </td>
                    </tr>

                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Identyfikator
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">6666</td>
                    </tr>

                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">Adres</td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        Wiejska 10
                      </td>
                    </tr>

                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">Nip</td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        1234567890
                      </td>
                    </tr>

                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Subskrypcja aktywna
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">Tak</td>
                    </tr>

                    <tr className="*:text-gray-900 *:first:font-medium">
                      <td className="px-3 py-2 whitespace-nowrap">
                        Termin subskrypcji
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        2025-11-11
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </p>
      </div>
    </>
  );
}
