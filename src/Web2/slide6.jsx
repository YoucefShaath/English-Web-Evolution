import Background from "../assets/background1.jpg";

export default function Sixthslide() {
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

      <div className="  hidden  md:block absolute -left-36 rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        <h1 className="pl-28">4.Web 2.0 vs Web 1.0</h1>
      </div>

      <div className="w-full max-w-4xl mx-auto mt-10 px-2 md:px-0">
        <h1 className="mb-6 md:mb-10 text-center text-3xl md:text-6xl lg:text-7xl md:pl-10 md:ml-[20%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Comparaison
        </h1>

        <div className="w-full md:w-auto mx-auto md:ml-56 overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20">
          <table className="w-full text-left text-white">
            <thead className="bg-white/10">
              <tr>
                <th className="px-2 py-2 md:px-6 md:py-4 text-base md:text-2xl font-semibold">
                  Feature
                </th>
                <th className="px-2 py-2 md:px-6 md:py-4 text-base md:text-2xl font-semibold">
                  Web 1.0
                </th>
                <th className="px-2 py-2 md:px-6 md:py-4 text-base md:text-2xl font-semibold">
                  Web 2.0
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10 text-sm md:text-base">
              <tr className="hover:bg-white/5 transition">
                <td className="px-2 py-2 md:px-6 md:py-4 ">Information</td>
                <td className="px-2 py-2 md:px-6 md:py-4">Static</td>
                <td className="px-2 py-2 md:px-6 md:py-4">Dynamic</td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="px-2 py-2 md:px-6 md:py-4">User Input</td>
                <td className="px-2 py-2 md:px-6 md:py-4">Controlled</td>
                <td className="px-2 py-2 md:px-6 md:py-4">
                  Open / Less controlled
                </td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="px-2 py-2 md:px-6 md:py-4">Collaboration</td>
                <td className="px-2 py-2 md:px-6 md:py-4">Limited</td>
                <td className="px-2 py-2 md:px-6 md:py-4">High</td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="px-2 py-2 md:px-6 md:py-4">Interaction</td>
                <td className="px-2 py-2 md:px-6 md:py-4">Low</td>
                <td className="px-2 py-2 md:px-6 md:py-4">High</td>
              </tr>

              <tr className="hover:bg-white/5 transition">
                <td className="px-2 py-2 md:px-6 md:py-4">Focus</td>
                <td className="px-2 py-2 md:px-6 md:py-4">Informative</td>
                <td className="px-2 py-2 md:px-6 md:py-4">
                  Social and Interactive
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
