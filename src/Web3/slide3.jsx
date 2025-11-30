import Background from "../assets/background1.jpg";

export default function Slide3Web3() {
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
          <linearGradient id="g1-s3" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-s3">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <circle
          cx="1180"
          cy="220"
          r="140"
          fill="#06b6d4"
          filter="url(#blur-s3)"
          className="decor-float"
          opacity="0.06"
        />
        <g
          stroke="url(#g1-s3)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M130 420 C 300 320, 540 280, 760 360" strokeOpacity="0.18" />
        </g>
        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="130" cy="420" r="3.8" />
          <circle cx="310" cy="360" r="3.4" />
          <circle cx="610" cy="320" r="4" />
        </g>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-s3)"
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
        3. Decentralized Web
      </h1>

      {/* MAIN TITLE */}
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl md:ml-[18%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        User Ownership & Control
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 text-center text-xl md:ml-[18%] text-indigo-100/90 max-w-xl mb-4">
        Web 3.0 empowers users by decentralizing data and giving them control over
        their digital identity, assets, and content. Users can own tokens, NFTs,
        and interact on peer-to-peer networks without centralized intermediaries.
      </p>
    </div>
  );
}
