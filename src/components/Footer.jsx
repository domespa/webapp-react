import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-around items-center h-40 m-4 px-4 rounded-xl bg-gray-200 shadow-sm">
        <Navbar />
        <div className="w-40 h-auto">
          <Logo />
        </div>
      </div>
    </footer>
  );
}
