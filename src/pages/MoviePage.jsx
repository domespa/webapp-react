import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import FormReview from "../components/ui/FormReview";

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
      <div className="flex grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="col-span-12 md:col-span-8 bg-gray-200 p-4 rounded-xl">
          <h3>{movie.title}</h3>
          <p>{movie.abstract}</p>
        </div>
      </div>
      <div className="mt-4 bg-gray-200 p-4 rounded-xl">
        <h1>Recensioni</h1>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map((review) => (
            <div key={review.id}>
              <h1>{review.name}</h1>
              <p>{review.vote}</p>
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p>Non ci sono recensioni per questo film.</p>
        )}
      </div>
      <div className="mt-4 bg-gray-200 p-4 rounded-xl">
        <FormReview onFormSubmitted={fetchMovie} />
      </div>
    </Container>
  );
}
