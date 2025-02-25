import { BrowserRouter, Route, Routes } from "react-router-dom";
// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
