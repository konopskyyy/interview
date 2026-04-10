export default function AccountInvitationOrganization() {
  return (
    <div className="border-t border-gray-200 pt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Twoje zaproszenia do organizacji
      </h3>

      {/* Mock Invitation Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/3840px-LEGO_logo.svg.png"
            alt="Logo firmy"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-900">LEGO</h4>
            <p className="text-sm text-gray-500">
              Zaprasza Cię do dołączenia do organizacji
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 w-full sm:w-auto">
          <button
            className="border border-gray-300 hover:bg-red-500 hover:text-white hover:shadow-xl hover:cursor-pointer shadow-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 transition duration-150 ease-in-out"
            onClick={() => alert("odrzucono")}
          >
            Odrzuć
          </button>
          <button
            className="border border-gray-300 hover:bg-green-600 hover:shadow-xl hover:text-white hover:cursor-pointer shadow-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 transition duration-150 ease-in-out"
            onClick={() => alert("zaakceptowano")}
          >
            Zaakceptuj
          </button>
        </div>
      </div>
    </div>
  );
}
