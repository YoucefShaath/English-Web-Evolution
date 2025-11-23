import Background from "../assets/background1.jpg";

export default function Slide6web4() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute left-[-8.1%] rotate-[-90deg] text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        3.Hyper-Personalized Digital Twins
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-4xl ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Your Digital Twin: The Autonomous Personal Layer
      </h1>

      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Every user has a persistent, secure Digital Twin (a personalized AI
        representation) that manages their decentralized data and preferences.
      </p>
      <p className="mt-4 text-center text-md ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Hyper-Personalization: Experiences are tailor-made down to the
        micro-moment (e.g., an app's UI adjusts based on your current physical
        health data).
      </p>
      <img
        src="https://www.e-spincorp.com/wp-content/uploads/2022/06/digital-twins.jpeg"
        alt="web evolution"
        width={380}
        className="ml-[23%] rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
