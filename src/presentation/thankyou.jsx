import Background from "../assets/background1.jpg";

export default function ThankYou() {
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
        THANK YOU
      </h1>
      <h1 className="text-6xl font-bold mb-6 ml-[18%]">Thank you for your attention</h1>
    </div>
  );
}
