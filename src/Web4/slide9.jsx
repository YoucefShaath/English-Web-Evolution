import Background from "../assets/background1.jpg";

export default function Slide9web4() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1-s9" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-s9">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <circle
          cx="1200"
          cy="210"
          r="140"
          fill="#06b6d4"
          filter="url(#blur-s9)"
          className="decor-float"
          opacity="0.06"
        />
        <g
          stroke="url(#g1-s9)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M120 420 C 300 320, 540 280, 760 360" strokeOpacity="0.18" />
        </g>
        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="120" cy="420" r="3.8" />
          <circle cx="300" cy="360" r="3.4" />
          <circle cx="600" cy="320" r="4" />
        </g>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-s9)"
          className="decor-float-slow"
          opacity="0.08"
        />

        {/* Subtle top-right grid lines */}
        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>
      <h1 className="hidden md:block absolute left-[-8%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        4.The Next Question
      </h1>
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl md:ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Human-AI Governance
      </h1>

      <p className="mt-4 text-center text-xl md:ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Web 4.0 is inevitable, bringing unprecedented efficiency and immersion.
      </p>

      <p className="mt-4 text-center text-xl md:ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        The final evolutionary stage is not just technological, but
        philosophical: How do we govern a system where machines are true
        collaborators with agency?
      </p>
      <img
        src="https://cdn.mos.cms.futurecdn.net/gWr6NrfMqA5kB42af2aice-970-80.jpg.webp"
        alt="web evolution"
        className="md:ml-[23%] md:w-96 w-80 rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
