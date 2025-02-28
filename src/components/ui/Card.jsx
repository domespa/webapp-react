import Heading from "./Heading";
import Text from "./Text";

export default function Card({ title, image, director, genre, abstract }) {
  return (
    <div className="flex bg-gray-200 h-full rounded-md shadow-lg gap-3 mx-3 ">
      <div className="w-1/2">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-2 w-1/2 h-full">
        <Heading level={3}>{title}</Heading>
        <Heading level={5} className="italic">
          {director}
        </Heading>
        <Heading level={5}>{genre}</Heading>
        <Text size="md">{abstract}</Text>
      </div>
    </div>
  );
}
