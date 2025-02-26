import Logo from "./Logo";
export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h-20 m-4 px-4 rounded-xl bg-gray-200 shadow-sm">
        <Logo />
        <h3>Navbar</h3>
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
