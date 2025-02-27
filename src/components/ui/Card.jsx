export default function Card({ title, image, director, genre, abstract }) {
  return (
    <div className="flex bg-white">
      <div className="w-1/2">
        <img src={image} alt={title} />
      </div>
      <div className="p-2 w-1/2 ">
        <h4>{title}</h4>
        <h5>{director}</h5>
        <h6>{genre}</h6>
        <p className="text-sm">{abstract}</p>
      </div>
    </div>
  );
}
