import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate, useParams, Link } from "react-router-dom";

// Components
import Discography from "../../components/Discography";

export default function ArtistDetailsPage() {
  const { fetchArtist } = useGlobalContext();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchArtist(id, setArtist, navigate);
  }, [id]);

  return artist ? (
    <div className="container mb-5">
      <button
        className="btn btn-primary fs-4 fw-semibold"
        onClick={(e) => {
          e.stopPropagation();
          navigate(-1);
        }}
      >
        ← Return to previous page
      </button>

      {/* Image and Bio */}
      <div className="row align-items-center mb-5 mt-3">
        <div className="col-lg-7 text-center mb-3 mb-lg-0">
          <img
            src={artist.images?.[0] || "assets/img/Vinyl.png"}
            alt={`Photo of ${artist.name}`}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-5 fs-5">
          <h1>{artist.name}</h1>
          <p>{artist.bio || "Biography not available."}</p>
        </div>
      </div>

      {/* Discography */}
      <div>
        <h2 className="mb-3">Available vinyls:</h2>
        <Discography vinyls={artist.vinyls} />
      </div>
    </div>
  ) : (
    <div className="text-center my-5">
      <h2>Caricamento in corso...</h2>
    </div>
  );
}
