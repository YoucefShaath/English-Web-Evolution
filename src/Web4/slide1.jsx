import Background from "../assets/background1.jpg";

export default function Slide1web4() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute left-[-7%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        1.The Symbiotic Shift
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl mt-8 ml-[18%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Web 3.0 vs. Web 4.0
      </h1>

      <p className="mt-4 text-center text-xl ml-[18%] text-indigo-100/90 max-w-xl mb-4">
        Web 3.0 is Human-Owned (decentralized data); Web 4.0 is Human-Machine
        Collaboration (AI-driven decision-making).
      </p>
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wgHAha6dPipkcCIctFf4nw.png"
        alt="web evolution"
        width={360}
        className="ml-[18%] rounded-3xl border-2 shadow-sm shadow-white"
      />
    </div>
  );
}
