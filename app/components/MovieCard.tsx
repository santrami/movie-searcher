import Link from "next/link";

interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
}

function MovieCard({ title, overview, posterPath }: MovieCardProps) {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "/no-image-available.png";
  return (
    <Link href={"/detailsMovie"}>
      <div className="bg-white rounded shadow p-4">
      <img
        className="w-full h-64 rounded mb-4"
        src={imageUrl}
        alt={`Poster for ${title}`}
      />
      <h2 className="text-2xl font-bold text-amber-950 mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{overview.substring(0,200)}...</p>
    </div>
    </Link>
  );
}

export default MovieCard;
