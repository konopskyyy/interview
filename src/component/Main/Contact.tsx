import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log("Form submitted", formState);
    alert("Dziękujemy za wiadomość! Odpowiemy wkrótce.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative w-screen left-[calc(-50vw+50%)] bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Effects matching Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Contact Info Column */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex self-start items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 mb-8 backdrop-blur-sm">
              <span className="w-3 h-3 rounded-full bg-indigo-500 mr-3 animate-pulse"></span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Kontakt
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
              Masz pytania? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Odezwij się do nas
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
              Jesteśmy tu, aby pomóc Ci zrewolucjonizować proces rekrutacji w
              Twojej firmie.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <a
                href="mailto:kontakt@interview.pl"
                className="group flex items-center p-5 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/80 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mr-4 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-0.5">
                    Napisz do nas
                  </p>
                  <p className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    kontakt@interview.pl
                  </p>
                </div>
              </a>

              <a
                href="tel:+48536123987"
                className="group flex items-center p-5 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/80 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mr-4 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-0.5">
                    Zadzwoń teraz
                  </p>
                  <p className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    +48 536 123 987
                  </p>
                </div>
              </a>

              <div className="group flex items-center p-5 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/80 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mr-4 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-0.5">
                    Odwiedź biuro
                  </p>
                  <p className="text-lg font-bold text-white leading-tight">
                    ul. Technologiczna 12/4,
                    <br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-gray-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Napisz do nas
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Adres email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="jan@firma.pl"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  placeholder="O co chcesz zapytać?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
