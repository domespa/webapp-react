import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
