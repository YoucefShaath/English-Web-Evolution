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

      {/* Decorative SVG overlay — purely visual, pointer-events-none so it doesn't affect interactions */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {/* Soft blurred blobs for depth */}

        <circle
          cx="1200"
          cy="240"
          r="160"
          fill="#06b6d4"
          filter="url(#blur)"
          className="decor-float"
          opacity="0.08"
        />

        {/* Network-like connecting lines and nodes */}
        <g
          stroke="url(#g1)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.9"
          className="decor-float-slow"
        >
          <path d="M150 420 C 300 300, 600 260, 780 360" strokeOpacity="0.22" />
          <path
            d="M420 520 C 560 420, 880 380, 1120 460"
            strokeOpacity="0.18"
          />
        </g>

        <g fill="#fff" opacity="0.9" className="decor-pulse">
          <circle cx="150" cy="420" r="4" />
          <circle cx="300" cy="360" r="3.5" />
          <circle cx="600" cy="320" r="4.5" />
          <circle cx="780" cy="360" r="3.8" />

          <circle cx="420" cy="520" r="4" />
          <circle cx="560" cy="460" r="3.5" />
          <circle cx="880" cy="420" r="4.2" />
          <circle cx="1120" cy="460" r="3.6" />
        </g>

        {/* New decorative circle bottom-left requested by user */}
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur)"
          className="decor-float-slow"
          opacity="0.08"
        />

        {/* Subtle top-right grid lines */}
        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>

      <div className="relative z-10 w-[70%] md:max-w-6xl h-full flex flex-col justify-center items-center md:ml-[37%] ml-[26%]">
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
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
