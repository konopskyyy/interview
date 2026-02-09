import LeaveOrganisationForm from "../../component/Form/LeaveOrganisationForm.tsx";

export default function AccountPageOrganizationData({
  organizationId,
  recruiterId,
}: {
  organizationId: string;
  recruiterId: string;
}) {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <dl className="divide-y divide-gray-200">
          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 flex items-center">
              Logo
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png?20231016092137"
                className="w-16 h-16 rounded-lg object-contain"
                alt="Logo firmy"
              />
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nazwa firmy</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              W gorącej wodzie kompany
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Identyfikator</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              6666
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Adres</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Wiejska 10
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">NIP</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              1234567890
            </dd>
          </div>

          <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
          </div>
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
