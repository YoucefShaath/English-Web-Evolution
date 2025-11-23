import Background from "../assets/background1.jpg";

export default function Slide9web4() {
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
        4.The Next Question
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Human-AI Governance
      </h1>

      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Web 4.0 is inevitable, bringing unprecedented efficiency and immersion.
      </p>
      
      <p className="mt-4 text-center text-2xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        The final evolutionary stage is not just technological, but
        philosophical: How do we govern a system where machines are true
        collaborators with agency?
      </p>
      <img
        src="https://cdn.mos.cms.futurecdn.net/gWr6NrfMqA5kB42af2aice-970-80.jpg.webp"
        alt="web evolution"
        width={380}
        className="ml-[23%] rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
