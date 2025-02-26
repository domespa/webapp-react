import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <div className="w-full px-20">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
