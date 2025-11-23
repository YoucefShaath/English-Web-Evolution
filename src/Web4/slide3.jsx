import Background from "../assets/background1.jpg";

export default function Slide3web4() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute left-[-12%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
       2.The Reign of Agentic AI
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl ml-[18%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        AI as the Engine of Web 4.0
      </h1>

      <p className="mt-4 text-center text-xl ml-[18%] text-indigo-100/90 max-w-xl mb-4">
        AI moves from being an application feature (like a chatbot) to the underlying logic.
      </p>
      <p className="mt-4 text-center text-md ml-[18%] text-indigo-100/90 max-w-xl mb-4">
        Self-directed AI programs capable of complex, multi-step operations across different platforms without continuous human input.
      </p>
      <img
        src="https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-970-80.jpg.webp"
        alt="web evolution"
        width={380}
        className="ml-[18%] rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
