import { Link } from "react-router-dom";
import Heading from "./Heading";
import Text from "./Text";
import RateFunction from "./RateFunction";

export default function Card({
  id,
  title,
  image,
  vote,
  director,
  genre,
  abstract,
}) {
  return (
    <Link to={`movies/${id}`}>
      <div className="flex bg-gray-200 h-full rounded-md shadow-lg gap-3 mx-3 ">
        <div className="w-1/2">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
        <div className="p-2 w-1/2 h-full">
          <Heading level={3}>{title}</Heading>
          <RateFunction voteaverage={vote} />
          <hr />
          <Heading level={5} className="italic">
            {director}
          </Heading>
          <Heading level={6}>{genre}</Heading>
          <hr />
          <Text size="sm">{abstract}</Text>
        </div>
      </div>
    </Link>
  );
}
