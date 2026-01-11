import RegisterForm from "../../component/register/RegisterForm.tsx";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-screen relative left-[calc(-50vw+50%)] font-sans">
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12 xl:p-24 relative z-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
              Dołącz teraz
            </h2>
            <p className="text-gray-500 text-lg">
              Stwórz konto i zacznij rekrutować lepiej
            </p>
          </div>

          <RegisterForm />

          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            Masz już konto?{" "}
            <a
              href="/login"
              className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Zaloguj się
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12 text-center">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Rekrutacja oparta na danych
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              "Zastąp intuicję twardymi danymi. Podejmij decyzję w oparciu o
              fakty, a nie przeczucia."
            </p>

            <div className="mt-12 flex justify-center gap-4 opacity-50">
              <div className="h-2 w-16 rounded-full bg-indigo-500"></div>
              <div className="h-2 w-4 rounded-full bg-gray-700"></div>
              <div className="h-2 w-4 rounded-full bg-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/5 to-transparent skew-x-12 blur-xl"></div>
      </div>
    </div>
  );
}
