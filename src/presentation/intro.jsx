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

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Evolution Of The Web
        </h1>

        <p className="mt-4 text-center text-indigo-100/90 max-w-2xl">
          A visual journey through the major phases of web development — from
          static pages to modern interactive applications.
        </p>

        <div className="mt-8 w-full flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-md text-indigo-200/80 font-semibold">
                  Realized by :
                </p>
                <ul className="mt-3 font-outfit text-lg space-y-1 text-slate-100">
                  <li>Shaath Youcef</li>
                  <li>Bendjedia Ahmed Taha</li>
                  <li>Nait Saidi Rayane</li>
                  <li>Baheddi Mohammed Nassim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
