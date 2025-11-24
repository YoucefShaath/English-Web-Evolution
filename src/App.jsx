import Presentation1 from "./presentation/presentation1.jsx";
import Presentation2 from "./presentation/presentation2.jsx";
import Web4 from "./Web4/web4.jsx";

function ScrollButtons() {
  const scrollByVh = (dir = 1) => {
    if (typeof window === "undefined") return;
    // dir: 1 -> down, -1 -> up
    window.scrollBy({ top: dir * window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-6 md:right-4 md:bottom-6 flex flex-col gap-2 z-50">
      <button
        aria-label="Scroll up"
        onClick={() => scrollByVh(-1)}
        className="w-12 h-12 rounded-full shadow-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
        title="Scroll up"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M12 8l6 6H6z" />
        </svg>
      </button>
      <button
        aria-label="Scroll down"
        onClick={() => scrollByVh(1)}
        className="w-12 h-12 rounded-full shadow-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
        title="Scroll down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M12 16l-6-6h12z" />
        </svg>
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <Presentation1 />
      <Web4 />
      <Presentation2 />
      <ScrollButtons />
    </>
  );
}

export default App;
