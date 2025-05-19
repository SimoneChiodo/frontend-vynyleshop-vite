import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

export default function ArtistListPage() {
  const { artistList } = useGlobalContext();

  return (
    <div className="container">
      <h1>Artist List</h1>

      {artistList.map((artist, index) => (
        <div className={`mb-5 w-100`} key={artist.id}>
          <div
            className={`artist-card d-flex flex-column flex-md-row align-items-center gap-4
                ${index % 2 === 1 ? "flex-md-row-reverse" : ""}`}
          >
            <Link
              to={`/artist/${artist.id}`}
              className="artist-photo-container reset-a flex-grow-1"
            >
              <img
                src={artist.images?.[0] || "assets/img/Vynil.png"} // Fallback image
                alt={`Foto di ${artist.name}`}
                className="artist-photo img-fluid"
              />
            </Link>
            <div className={`artist-bio text-center text-md-start flex-grow-1`}>
              <h4>{artist.name}</h4>
              <p>{artist.bio || "Biografia non disponibile."}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
