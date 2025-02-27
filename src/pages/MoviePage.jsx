import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="col-span-6">
          <h3>{movie.title}</h3>
          <p>{movie.abstract}</p>
        </div>
      </div>
    </Container>
  );
}
