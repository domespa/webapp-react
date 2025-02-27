import axios from "../api/axios";
import { useEffect, useState } from "react";
import Column from "../components/ui/Column";
import Container from "../components/ui/Container";
import Row from "../components/ui/Row";
import Card from "../components/ui/Card";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <Container>
        <Row>
          {movies.map((movie) => (
            <Column key={movie.id}>
              <Card
                title={movie.title}
                image={movie.image}
                director={movie.director}
                genre={movie.genre}
                abstract={movie.abstract}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </>
  );
}
