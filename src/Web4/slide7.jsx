import Background from "../assets/background1.jpg";

export default function Slide7web4() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute left-[-8%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        3.Web 4.0 in Action
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Transforming the Physical World
      </h1>

      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Smart Healthcare: Remote, continuous patient monitoring with AI
        predicting health risks and automatically deploying intervention (e.g.,
        booking an emergency follow-up).
      </p>
      <p className="mt-4 text-center text-md ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Autonomous Logistics: Self-optimizing supply chains managed entirely
        by AI agents and IoE devices, reacting to real-time events like traffic
        or weather.
      </p>
      <img
        src="https://hospitalsmagazine.com/wp-content/uploads/2025/03/Artificial-Intelligence-in-Healthcare.jpg"
        alt="web evolution"
        width={280}
        className="ml-[23%] rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
