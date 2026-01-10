export default function Hero() {
  return (
    <section className="relative w-screen left-[calc(-50vw+50%)] bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex self-start items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 mb-8 backdrop-blur-sm">
              <span className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse"></span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Niezbędny Asystent HR
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] mb-8">
              Wybierz kandydata <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                bez wahania
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Zastąp intuicję twardymi danymi. Porównuj kompetencje, zbieraj
              oceny w jednym miejscu i podejmij decyzję w oparciu o fakty, a nie
              przeczucia.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95">
                Rozpocznij ocenianie
              </button>
              <button className="px-10 py-5 text-lg font-bold text-gray-300 bg-gray-800/50 border border-gray-600 rounded-2xl hover:bg-gray-700 transition-all hover:scale-105">
                Zobacz demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-base text-gray-500 font-medium">
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-4 border-gray-900"
                  src="https://i.pravatar.cc/100?img=11"
                  alt="User"
                />
                <img
                  className="w-12 h-12 rounded-full border-4 border-gray-900"
                  src="https://i.pravatar.cc/100?img=12"
                  alt="User"
                />
                <img
                  className="w-12 h-12 rounded-full border-4 border-gray-900"
                  src="https://i.pravatar.cc/100?img=13"
                  alt="User"
                />
                <div className="w-12 h-12 rounded-full border-4 border-gray-900 bg-gray-800 flex items-center justify-center text-white text-xs">
                  +2k
                </div>
              </div>
              <p>
                Dołącz do{" "}
                <span className="text-white font-bold">2000+ zespołów HR</span>
              </p>
            </div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-xl bg-opacity-90">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">
                    Raport: Senior Dev
                  </h3>
                  <p className="text-gray-400 text-sm">Rekrutacja Q1 2024</p>
                </div>
                <span className="text-sm font-bold bg-green-500/20 text-green-400 px-4 py-2 rounded-lg border border-green-500/30">
                  Rekomendacja
                </span>
              </div>

              <div className="group flex items-center gap-6 mb-6 p-5 bg-gradient-to-r from-gray-700/50 to-gray-700/30 rounded-2xl border border-indigo-500 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?img=59"
                    className="w-16 h-16 rounded-full border-2 border-indigo-500"
                    alt="Adam"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    #1
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2 items-end">
                    <div>
                      <span className="block text-lg font-bold text-white">
                        Adam Nowak
                      </span>
                      <span className="text-xs text-indigo-300">
                        Pasuje w 98%
                      </span>
                    </div>
                    <span className="text-2xl font-black text-indigo-400">
                      9.2
                    </span>
                  </div>
                  <div className="w-full bg-gray-900 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-3 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8 p-5 rounded-2xl border border-gray-700 hover:bg-gray-700/30 transition-colors opacity-70">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  className="w-16 h-16 rounded-full border-2 border-gray-600 grayscale"
                  alt="Ewa"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-2 items-end">
                    <div>
                      <span className="block text-lg font-bold text-gray-300">
                        Ewa Kowalska
                      </span>
                      <span className="text-xs text-gray-500">
                        Pasuje w 70%
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-500">
                      7.8
                    </span>
                  </div>
                  <div className="w-full bg-gray-900 rounded-full h-3">
                    <div
                      className="bg-gray-600 h-3 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-gray-100 hover:bg-white text-gray-900 text-lg font-bold rounded-xl transition-colors shadow-lg">
                Pobierz pełne porównanie PDF
              </button>
            </div>

            <div className="absolute -bottom-10 -right-10 w-full h-full bg-indigo-600/10 rounded-3xl -z-10 transform rotate-6 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
