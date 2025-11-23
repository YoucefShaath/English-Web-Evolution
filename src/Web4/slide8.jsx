import Background from "../assets/background1.jpg";

export default function Slide8web4() {
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
        4.Web 4.0 Challenges
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Ethics and Control
      </h1>

      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Privacy and Data Autonomy: If the AI is highly intelligent, who truly
        owns the insights derived from the user's data?
      </p>
      <p className="mt-4 text-center text-md ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Algorithmic Bias: The risk of embedding societal biases into the
        autonomous decision-making AI agents.
      </p>
      <p className="mt-4 text-center text-2xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Dependency & Resilience: Increased reliance on complex, interconnected
        systems, raising questions about what happens when one component fails.
      </p>
    </div>
  );
}
