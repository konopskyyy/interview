import { useEffect, useState } from "react";
import { getOrganizationsList } from "../../service/OrganizationApiClient.ts";
import type { Organization } from "../../interface/Organization.ts";
import CardList from "./component/CardList.tsx";

export default function OrganizationList() {
  const [organizationsList, setOrganizationsList] = useState<Organization[]>(
    [],
  );

  const fetchOrganizationsList = async () => {
    const result = await getOrganizationsList();

    setOrganizationsList(result);
  };

  useEffect(() => {
    fetchOrganizationsList();
  }, []);

  return (
    <div>
      <fieldset className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <legend className="px-2 text-gray-700">Lista organizacji</legend>
        <div className="flex flex-wrap gap-7">
          {organizationsList.map((value) => (
            <div key={value.id}>
              <CardList
                id={value.id}
                name={value.name}
                role={value.memberships[0].role}
                onLeaveSuccess={fetchOrganizationsList}
              />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
