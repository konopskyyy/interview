import { useEffect, useRef, useState } from "react";

function useOnScreen(
  ref: React.RefObject<HTMLElement | null>,
  rootMargin = "0px",
) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}

const features = [
  {
    title: "Inteligentne Porównania",
    description:
      "Automatycznie zestawiaj kandydatów obok siebie. Nasz algorytm wyłapuje kluczowe różnice w kompetencjach.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    delay: 0,
  },
  {
    title: "Obiektywna Punktacja",
    description:
      "Zdefiniuj własne kryteria lub skorzystaj z gotowych szablonów. Oceny są standaryzowane, eliminując bias poznawczy.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    delay: 100,
  },
  {
    title: "Raporty Decyzyjne",
    description:
      "Generuj piękne, czytelne raporty PDF jednym kliknięciem. Idealne do prezentacji przed zarządem lub klientem.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    delay: 200,
  },
  {
    title: "Scenariusze Rozmów",
    description:
      "Twórz profesjonalne, ustrukturyzowane scenariusze rozmów. Zadbaj o spójność procesu rekrutacyjnego.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    delay: 300,
  },
  {
    title: "Równe Szanse",
    description:
      "Technologia wspierająca różnorodność. Porównuj kompetencje kandydatów bez uprzedzeń i dyskryminacji ze względu na płeć.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    delay: 400,
  },
  {
    title: "Testy Kompetencji",
    description:
      "Weryfikuj umiejętności praktyczne za pomocą wbudowanych testów dla kandydatów. Szybka i miarodajna ocena skillsów.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    delay: 500,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, "-100px");

  return (
    <section
      ref={sectionRef}
      className="relative w-screen left-[calc(-50vw+50%)] bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm tracking-wide uppercase mb-6">
            Dlaczego my?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Rekrutacja weszła na <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              wyższy poziom
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Pożegnaj rozproszone notatki i chaotyczne maile. Dajemy Ci
            narzędzia, dzięki którym proces decyzyjny staje się prosty i
            przejrzysty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${feature.delay + 300}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
