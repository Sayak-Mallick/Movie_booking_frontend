import { MovieCardType } from "@/app/types";
import { useRouter } from "next/navigation";
import { BsFillStarFill } from "react-icons/bs";
import './MovieCard.css'

const MovieCard = (data: MovieCardType) => {
  const router = useRouter();
  const city = "mumbai";
  const { title, imageUrl, _id, rating, type } = data;
  return (
    <div
      className="moviecard"
      onClick={() => {
        router.push(`/${city}/movies/${title}`);
      }}
    >
      <div
        className="movieimg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <p className="rating flex items-center gap-1">
          {Array.from({ length: Math.floor(rating ?? 0) }).map((_, i) => (
            <BsFillStarFill key={i} className="star" />
          ))}
          <span className="ml-2">{rating}/10</span>
        </p>
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p className="type">{type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
