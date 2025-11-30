import Background from "../assets/background1.jpg";

export default function Slide1Web3() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
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
          <linearGradient id="g1-s1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-s1">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <circle
          cx="1200"
          cy="200"
          r="140"
          fill="#06b6d4"
          filter="url(#blur-s1)"
          className="decor-float"
          opacity="0.06"
        />
        <g
          stroke="url(#g1-s1)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M120 420 C 260 320, 520 280, 740 360" strokeOpacity="0.18" />
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
          filter="url(#blur-s1)"
          className="decor-float-slow"
          opacity="0.08"
        />

        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>

      {/* SIDE TITLE */}
      <h1 className="hidden md:block absolute left-[-7%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        1. Semantic Web
      </h1>

      {/* MAIN TITLE */}
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl md:ml-[18%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Understanding Data and Context
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 text-center text-xl md:ml-[18%] text-indigo-100/90 max-w-xl mb-4">
        Web 3.0 uses structured, machine-readable data and AI to understand meaning
        and context. Knowledge graphs and semantic connections make search, recommendations,
        and personalization smarter and more accurate.
      </p>
    </div>
  );
}
