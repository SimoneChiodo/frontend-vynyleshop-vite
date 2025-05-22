import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";

// Components
import VynilDiscographyCard from "../../components/VynilDiscographyCard";

export default function ArtistDetailsPage() {
  const { fetchArtist } = useGlobalContext();
  const [artist, setArtist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchArtist(id, setArtist);
  }, [id]);

  return artist ? (
    <div className="container my-5">
      {/* Jumbo */}
      <div className="row align-items-center bg-light p-4 rounded mb-5 shadow-sm">
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <img
            src={artist.images?.[0] || "assets/img/Vynil.png"}
            alt={`Photo of ${artist.name}`}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h1>{artist.name}</h1>
          <p>{artist.bio || "Biography not available."}</p>
        </div>
      </div>

      {/* Discography */}
      <div>
        <h2 className="mb-4">Discography</h2>
        <div className="row">
          {artist.vynils.map((vynil) => (
            <VynilDiscographyCard key={vynil.id} vynil={vynil} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center my-5">
      <h2>Caricamento in corso...</h2>
    </div>
  );
}
