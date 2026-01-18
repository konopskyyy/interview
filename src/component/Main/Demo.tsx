import { useState, useEffect } from "react";
import demoPlaceholder from "../../assets/demo_placeholder.png";

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setVideoFinished(false);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
        setVideoFinished(true);
      }, 5000); // 5 seconds "video"
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Proszę zaakceptować regulamin.");
      return;
    }
    // Simulation
    setIsSubscribed(true);
    setEmail("");
    setAgreed(false);
  };

  return (
    <section
      id="demo"
      className="relative w-screen left-[calc(-50vw+50%)] bg-gray-900 text-white py-24 lg:py-32 overflow-hidden border-t border-gray-800"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 mb-8 backdrop-blur-sm">
              <span className="w-3 h-3 rounded-full bg-indigo-500 mr-3 animate-pulse"></span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Wersja Demo (Wkrótce)
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-white">
              Zobacz naszego <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Eksperta w akcji
              </span>
            </h2>

            <div className="mb-10"></div>

            {/* Newsletter Form */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
              <h4 className="text-lg font-bold text-white mb-4">
                Powiadomimy Cię o starcie demo!
              </h4>
              {isSubscribed ? (
                <div className="text-indigo-400 font-bold flex items-center bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dziękujemy! Odezwiemy się niebawem.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Twój adres email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg active:scale-95 shrink-0"
                    >
                      Zapisz się
                    </button>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-900 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                      Akceptuję regulamin i politykę prywatności. Chcę
                      otrzymywać informacje o postępach prac nad aplikacją.
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>

          {/* Video Player Column */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[40px] blur-2xl opacity-50 transition-opacity group-hover:opacity-70"></div>

              <div className="relative rounded-[32px] overflow-hidden bg-black border-[8px] border-gray-800 shadow-2xl aspect-video flex items-center justify-center group/player">
                {/* Slideshow Image */}
                <img
                  src={demoPlaceholder}
                  alt="Demo content"
                  className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? "scale-110 blur-xl opacity-20" : "group-hover/player:scale-105"}`}
                />

                {/* Overlay with Controls/Messages */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-8 transition-colors">
                  {/* Text Overlay when paused */}
                  {!isPlaying && !videoFinished && (
                    <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                      <span className="text-gray-300 text-sm font-medium tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        Kliknij, aby uruchomić
                      </span>
                    </div>
                  )}

                  {/* Start Button */}
                  {!isPlaying && !videoFinished && (
                    <button
                      onClick={handlePlayClick}
                      className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white/20 active:scale-95 transition-all transform z-20 group-hover/player:bg-indigo-600 group-hover/player:border-indigo-500"
                    >
                      <svg
                        className="w-10 h-10 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}

                  {/* Playing State Caption */}
                  {isPlaying && (
                    <div className="flex flex-col items-center z-20 animate-in fade-in zoom-in duration-500">
                      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-6"></div>
                      <h3 className="text-white text-2xl font-black mb-2 px-4">
                        Ładowanie potężnego demo...
                      </h3>
                      <p className="text-indigo-200 font-medium">
                        Sprawdzamy, czy świat jest na to gotowy.
                      </p>
                    </div>
                  )}

                  {/* Finished State */}
                  {videoFinished && !isPlaying && (
                    <div className="flex flex-col items-center z-20 animate-in slide-in-from-bottom duration-500 bg-black/60 p-8 rounded-3xl backdrop-blur-xl border border-white/10">
                      <h3 className="text-white text-2xl md:text-3xl font-black mb-4 px-4 leading-tight">
                        Ciąg dalszy nastąpi...
                      </h3>
                      <p className="text-gray-300 max-w-sm mb-6">
                        Wygląda na to, że dotarłeś do końca internetu. Reszta
                        aplikacji wciąż się kompiluje w naszej wyobraźni.
                        <strong> Zapisz się na newsletter</strong>, żeby nie
                        przegapić premiery!
                      </p>
                      <button
                        onClick={() => setVideoFinished(false)}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold uppercase tracking-widest"
                      >
                        Obejrzyj jeszcze raz
                      </button>
                    </div>
                  )}
                </div>

                {/* Progress bar (simulated) */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-30">
                    <div className="h-full bg-indigo-500 animate-[progress_5s_linear_forwards]"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small style for progress bar animation */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
