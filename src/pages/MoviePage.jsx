import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import FormReview from "../components/ui/FormReview";
import Heading from "../components/ui/Heading";
import Text from "../components/ui/Text";
import RateFunction from "../components/ui/RateFunction";

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
      <div className="flex grid grid-cols-12 bg-gray-200 rounded-xl">
        <div className="col-span-12 md:col-span-3">
          <img
            className="h-full w-full object-cover p-5"
            src={movie.image}
            alt={movie.title}
          />
        </div>
        <div className="col-span-12 md:col-span-8 p-4 rounded-xl">
          <Heading level={2}>{movie.title}</Heading>
          <RateFunction voteaverage={movie.avg_vote} />
          <Text size="lg">{movie.abstract}</Text>
        </div>
      </div>
      <div className="mt-4 bg-gray-200 p-4 rounded-xl">
        <Heading level={3}>Recensioni</Heading>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map((review) => (
            <div key={review.id}>
              <Heading level={5}>{review.name}</Heading>
              <RateFunction voteaverage={review.vote} />
              <Text size="md">{review.text}</Text>
            </div>
          ))
        ) : (
          <Text size="md">Non ci sono recensioni per questo film.</Text>
        )}
      </div>
      <div className="mt-4 bg-gray-200 p-4 rounded-xl">
        <FormReview onFormSubmitted={fetchMovie} />
      </div>
    </Container>
  );
}
