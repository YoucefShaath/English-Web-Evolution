import Background from "../assets/background1.jpg";

export default function Slide5web4() {
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
        2.Ultimate Interfaces
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        BCI & Voice
      </h1>

      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        How humans will interact with the web of the future.
      </p>
      <p className="mt-4 text-center text-md ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Brain-Computer Interfaces (BCI): The long-term vision of direct
        thought-to-digital interaction.
      </p>
      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Natural Language & Gesture: Using complex voice commands or simple hand
        gestures to orchestrate sophisticated tasks performed by AI agents.
      </p>
    </div>
  );
}
