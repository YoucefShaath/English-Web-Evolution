import Background from "../assets/background1.jpg";

export default function Slide7web4() {
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
          <linearGradient id="g1-s7" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-s7">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <circle
          cx="1210"
          cy="210"
          r="140"
          fill="#06b6d4"
          filter="url(#blur-s7)"
          className="decor-float"
          opacity="0.06"
        />
        <g
          stroke="url(#g1-s7)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M130 420 C 300 320, 540 280, 760 360" strokeOpacity="0.18" />
        </g>
        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="130" cy="420" r="3.8" />
          <circle cx="320" cy="360" r="3.4" />
          <circle cx="620" cy="320" r="4" />
        </g>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-s7)"
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
        3.Web 4.0 in Action
      </h1>
      <h1 className="text-4xl text-center md:text-6xl lg:text-7xl md:ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Transforming the Physical World
      </h1>

      <p className="mt-4 text-center text-lg md:ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Smart Healthcare: Remote, continuous patient monitoring with AI
        predicting health risks and automatically deploying intervention (e.g.,
        booking an emergency follow-up).
      </p>
      <p className="mt-4 text-center text-md md:ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Autonomous Logistics: Self-optimizing supply chains managed entirely by
        AI agents and IoE devices, reacting to real-time events like traffic or
        weather.
      </p>
      <img
        src="https://hospitalsmagazine.com/wp-content/uploads/2025/03/Artificial-Intelligence-in-Healthcare.jpg"
        alt="web evolution"
        width={280}
        className="md:ml-[23%] md:w-64 w-56 rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
