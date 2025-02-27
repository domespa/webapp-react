import Logo from "./Logo";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h-25 m-4 px-4 rounded-xl bg-gray-200 shadow-sm">
        <div className="w-25 h-auto">
          <Logo />
        </div>
        <Navbar />
        <div>
          <input
            type="text"
            placeholder="Cerca..."
            className="bg-white px-3 py-1 rounded-lg"
          />
          <button
            type="submit"
            className="bg-black text-white ml-2 py-1 px-4 rounded-lg hover:bg-white hover:text-black cursor-pointer"
          >
            Invio
          </button>
        </div>
      </div>
    </header>
  );
}
