import Background from "../assets/background1.jpg";

export default function QR() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <h1 className="absolute left-0 rotate-[-90deg] ml-10 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200" >QR CODE</h1>
      <h1 className="text-3xl font-bold mb-6 ml-[18%]">Scan the QR Code</h1>
      <img
        src="https://www.svgrepo.com/show/303628/qr-code.svg"
        alt="QR Code"
        className="w-64 h-64 ml-[18%]"
      />
    </div>
  );
}
