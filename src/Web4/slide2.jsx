import Background from "../assets/background1.jpg";

export default function Slide2web4() {
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
          <linearGradient id="g1-s2" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-s2">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <circle
          cx="1150"
          cy="180"
          r="130"
          fill="#06b6d4"
          filter="url(#blur-s2)"
          className="decor-float"
          opacity="0.06"
        />
        <g
          stroke="url(#g1-s2)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M100 420 C 260 320, 520 280, 740 360" strokeOpacity="0.18" />
        </g>
        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="110" cy="420" r="3.8" />
          <circle cx="280" cy="360" r="3.4" />
          <circle cx="580" cy="320" r="4" />
        </g>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-s2)"
          className="decor-float-slow"
          opacity="0.08"
        />

        {/* Subtle top-right grid lines */}
        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>
      <h1 className="hidden md:block absolute left-0 rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        1.Proactivity
      </h1>
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl  md:ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        The Web That Anticipates
      </h1>

      <p className="mt-4 text-center text-xl md:ml-[22%] text-indigo-100/90 max-w-xl mb-4">
        Web 4.0 doesn't wait for a search query; it anticipates needs, executes
        tasks autonomously, and adapts in real-time.
      </p>
      <p className="mt-4 text-center text-md md:ml-[22%] text-indigo-100/90 max-w-xl mb-4">
        Moving from a tool (Web 3.0) to a highly sophisticated Digital Co-Pilot
        (Web 4.0).
      </p>
      <p className="mt-4 text-center text-2xl md:text-3xl md:ml-[22%] text-indigo-100/90 max-w-xl mb-4">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          The Goal
        </span>
        : Simplify the user experience by making technology "invisible."
      </p>
    </div>
  );
}
<circle
  cx="140"
  cy="760"
  r="90"
  fill="#fbbf24"
  filter="url(#blur-s2)"
  className="decor-float-slow"
  opacity="0.22"
/>;
