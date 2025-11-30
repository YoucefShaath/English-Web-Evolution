import Background from "../assets/background.jpg";

export default function IntroWeb3() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1-intro" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-intro">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <circle
          cx="1180"
          cy="200"
          r="140"
          fill="#06b6d4"
          filter="url(#blur-intro)"
          className="decor-float"
          opacity="0.06"
        />
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-intro)"
          className="decor-float-slow"
          opacity="0.08"
        />

        <g
          stroke="url(#g1-intro)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M140 420 C 300 320, 540 280, 760 360" strokeOpacity="0.18" />
        </g>

        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="140" cy="420" r="3.8" />
          <circle cx="320" cy="360" r="3.4" />
          <circle cx="620" cy="320" r="4" />
        </g>

        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>

      <div className="relative z-10 ml-[26%] w-[70%] md:max-w-6xl h-full flex flex-col justify-center items-center md:ml-[37%]">
        <h1 className="text-xl text-center md:text-2xl lg:text-3xl font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Web 3.0 – The Semantic & Decentralized Web
        </h1>

        <div className="mt-8 w-full flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 shadow-lg">
            <p className="text-lg text-indigo-100/90 text-center font-semibold">
              Explore the evolution of the web: semantic intelligence, AI-driven understanding,
              decentralized ownership, and the future of user-controlled applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
