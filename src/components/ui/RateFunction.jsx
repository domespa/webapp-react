export default function RateFunction({ voteaverage }) {
  const vote = Number(voteaverage);
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<i className="fa-solid fa-star text-yellow-500" key={i}></i>);
    } else {
      stars.push(<i className="fa-regular fa-star text-gray-400" key={i}></i>);
    }
  }

  return <>{stars}</>;
}
