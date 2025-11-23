import Background from "../assets/background.jpg";

export default function Intro() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      <div className="relative z-10 max-w-6xl h-full flex flex-col justify-center items-center ml-[45%]">

        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Web 4.0 Slide Ideas (The Symbiotic / Intelligent Web)
        </h1>

        <div className="mt-8 w-full flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-md text-indigo-200/80 font-semibold">
                  Sections :
                </p>
                <ul className="mt-3 font-outfit text-lg space-y-1 text-slate-100 list-disc list-inside">
                  <li>The Core Concept</li>
                  <li>Technological Pillars</li>
                  <li>Applications and Impact</li>
                  <li>Challenges and the Future</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
