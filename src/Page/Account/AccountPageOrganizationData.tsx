import { useQuery } from "@tanstack/react-query";
import LeaveOrganisationForm from "../../component/Form/LeaveOrganisationForm.tsx";
import { getOrganization } from "../../service/OrganizationApiClient.ts";

export default function AccountPageOrganizationData({
  organizationId,
  recruiterId,
}: {
  organizationId: string;
  recruiterId: string;
}) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["organization", organizationId],
    queryFn: () => getOrganization(organizationId),
  });

  if (isLoading) {
    return <div>Ładowanie danych organizacji...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Błąd: {(error as Error).message}</div>;
  }

  if (!data) {
    return <div>Nie znaleziono danych organizacji.</div>;
  }

  const { name, logo, taxId, address } = data;
  const formattedAddress = address
    ? `${address.street} ${address.buildingNo}${address.apartmentNo ? `/${address.apartmentNo}` : ""}, ${address.postalCode} ${address.city}, ${address.country}`
    : "Brak adresu";

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <dl className="divide-y divide-gray-200">
          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 flex items-center">
              Logo
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {logo ? (
                <img
                  src={logo}
                  className="w-16 h-16 rounded-lg object-contain"
                  alt={`Logo firmy ${name}`}
                />
              ) : (
                <span className="text-gray-400 italic">Brak logo</span>
              )}
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nazwa firmy</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {name}
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Identyfikator</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {organizationId}
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Adres</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formattedAddress}
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">NIP</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {taxId}
            </dd>
          </div>

          {/* Opcjonalne: jeśli API zwróci dane o subskrypcji, można je tu podłączyć w przyszłości */}
          {/* <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Subskrypcja aktywna
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Tak
              </span>
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Termin subskrypcji
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              2025-11-11
            </dd>
          </div> */}
        </dl>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Opuść organizację
        </h3>
        <LeaveOrganisationForm
          organizationId={organizationId}
          recruiterId={recruiterId}
        />
      </div>
    </>
  );
}
