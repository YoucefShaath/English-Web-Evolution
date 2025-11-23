import Background from "../assets/background1.jpg";

export default function Slide2web4() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute left-0 rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
       1.Proactivity
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl  ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        The Web That Anticipates
      </h1>

      <p className="mt-4 text-center text-xl ml-[22%] text-indigo-100/90 max-w-xl mb-4">
        Web 4.0 doesn't wait for a search query; it anticipates needs, executes tasks autonomously, and adapts in real-time.
      </p>
      <p className="mt-4 text-center text-md ml-[22%] text-indigo-100/90 max-w-xl mb-4">
        Moving from a tool (Web 3.0) to a highly sophisticated Digital Co-Pilot (Web 4.0).
      </p>
      <p className="mt-4 text-center text-3xl ml-[22%] text-indigo-100/90 max-w-xl mb-4">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">The Goal</span>: Simplify the user experience by making technology "invisible."
      </p>
    </div>
  );
}
