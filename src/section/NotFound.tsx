const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg text-gray-900">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">
          Strona nie została znaleziona
        </h2>
        <p className="mt-2 text-gray-600">
          Wygląda na to, że szukasz czegoś, co nie istnieje.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          onClick={() => (window.location.href = "/")}
        >
          Wróć do strony głównej
        </button>
      </div>
    </div>
  );
};

export default NotFound;
