import Background from "../assets/background1.jpg";

export default function Slide4web4() {
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
        2.Merging Realities
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
        Spatial & Ubiquitous Computing
      </h1>

      <p className="mt-4 text-center text-xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        The lines between the digital and physical world dissolve.
      </p>
      <p className="mt-4 text-center text-md ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        Extended Reality (XR): Seamless integration of Augmented Reality (AR)
        layers into everyday life (e.g., smart glasses acting as the web
        browser).{" "}
      </p>
      <p className="mt-4 text-center text-3xl ml-[23%] text-indigo-100/90 max-w-xl mb-4">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">Internet of Everything (IoE)</span>: The massive network connecting not just devices (IoT), but also systems, data, and processes into one cohesive web.
      </p>
    </div>
  );
}
