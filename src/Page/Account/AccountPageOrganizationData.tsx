export default function AccountPageOrganizationData() {
  return (
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
              <td className="px-3 py-2 whitespace-nowrap">Nazwa firmy</td>
              <td className="px-3 py-2 whitespace-nowrap">
                W gorącej wodzie kompany
              </td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium">
              <td className="px-3 py-2 whitespace-nowrap">Identyfikator</td>
              <td className="px-3 py-2 whitespace-nowrap">6666</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium">
              <td className="px-3 py-2 whitespace-nowrap">Adres</td>
              <td className="px-3 py-2 whitespace-nowrap">Wiejska 10</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium">
              <td className="px-3 py-2 whitespace-nowrap">Nip</td>
              <td className="px-3 py-2 whitespace-nowrap">1234567890</td>
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
              <td className="px-3 py-2 whitespace-nowrap">2025-11-11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
