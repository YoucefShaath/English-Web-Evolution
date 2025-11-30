import Background from "../assets/breview.jpg";

export default function Review() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900/40 backdrop-blur-xl p-4"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1-thanks" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>
          <filter id="blur-thanks">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        <circle
          cx="1180"
          cy="240"
          r="150"
          fill="#06b6d4"
          filter="url(#blur-thanks)"
          opacity="0.08"
          className="decor-float"
        />

        <circle
          cx="200"
          cy="700"
          r="120"
          fill="#fbbf24"
          filter="url(#blur-thanks)"
          opacity="0.07"
          className="decor-float-slow"
        />

        <g stroke="url(#g1-thanks)" strokeWidth="1.1" fill="none" opacity="0.85">
          <path d="M150 420 C 350 320, 680 260, 900 350" strokeOpacity="0.18" />
        </g>

        {/* small white sparkles */}
        <g fill="#fff" opacity="0.9" className="decor-pulse">
          <circle cx="160" cy="420" r="4" />
          <circle cx="340" cy="360" r="3.4" />
          <circle cx="650" cy="300" r="4.2" />
        </g>

        {/* Grid Lines */}
        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>

      {/* Vertical title */}
      <h1 className="hidden md:block absolute left-0 rotate-[-90deg] text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-yellow-200 drop-shadow-xl">
        Review
      </h1>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center md:ml-[18%]">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-yellow-200 drop-shadow-md mb-6">
          Any Feedback?
        </h1>

        <p className="text-lg md:text-xl text-indigo-100/90 max-w-xl text-center mb-10">
          We’d love to hear your thoughts. Help us improve by sharing your
          honest feedback. Every opinion counts!
        </p>

        {/* Glowing feedback card */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20 max-w-md text-center transform hover:scale-[1.02] transition-all duration-300">
          <p className="text-xl text-white/90 mb-6">
            Click the button below to fill out our feedback form.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Give Feedback
          </a>
        </div>
      </div>
    </div>
  );
}
