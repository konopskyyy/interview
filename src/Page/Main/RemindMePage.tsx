import RemindMeForm from "../../component/remind-me/RemindMeForm.tsx";

export default function RemindMePage() {
  return (
    <div className="flex min-h-screen w-screen relative left-[calc(-50vw+50%)] font-sans">
      {/* Left Side - Hero Style Background (REVERSED like Login) */}
      <div className="hidden lg:block w-1/2 bg-gray-900 relative overflow-hidden">
        {/* Abstract Shapes/Blobs */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12 text-center">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Zresetuj hasło
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              Nie martw się, pomożemy Ci odzyskać dostęp do Twojego konta.
            </p>
          </div>
        </div>

        {/* Decorative Angled Overlay */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/5 to-transparent -skew-x-12 blur-xl"></div>
      </div>

      {/* Right Side - Form (REVERSED like Login) */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12 xl:p-24 relative z-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
              Odzyskiwanie konta
            </h2>
            <p className="text-gray-500 text-lg">
              Wpisz swój email, aby zresetować hasło
            </p>
          </div>

          <RemindMeForm />

          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            Pamiętasz hasło?{" "}
            <a
              href="/login"
              className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Zaloguj się
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
