import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

export default function ArtistListPage() {
  const { fetchFilteredArtists } = useGlobalContext();
  const navigate = useNavigate();
  const [artistList, setArtistList] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const [name, setName] = useState("");
  const filters = { name };

  const loadArtists = (replace) => {
    fetchFilteredArtists(
      filters,
      replace ? null : lastId,
      6,
      replace ? [] : artistList,
      setArtistList,
      setLastId,
      setHasMore,
      navigate
    );
  };

  useEffect(() => {
    loadArtists(false);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setHasMore(true); // riattiva il pulsante load
    loadArtists(true);
  };

  return (
    <div className="container mb-5">
      <div className="title-and-filters pb-3">
        <div className="d-flex justify-content-between align-items-center pb-2">
          <h1 className="m-0">Artist List</h1>

          <button
            className="btn btn-outline-primary py-2 px-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFilter"
            aria-expanded="false"
            aria-controls="collapseFilter"
          >
            Filters
          </button>
        </div>

        <div id="collapseFilter" className="collapse">
          <div className="pt-2 px-4">
            <form className="row g-3" onSubmit={handleOnSubmit}>
              {/* Name */}
              <div className="col">
                <label htmlFor="validationCustom01" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  className="btn btn-primary fs-5 px-5"
                  type="submit"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFilter"
                  aria-expanded="false"
                  aria-controls="collapseFilter"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {artistList.map((artist, index) => (
        <div className={`mb-5 w-100`} key={artist.id}>
          <div
            className={`artist-card d-flex flex-column flex-lg-row align-items-center gap-4
                ${index % 2 === 1 ? "flex-lg-row-reverse" : ""}`}
          >
            <Link
              to={`/artist/${artist.id}`}
              className="artist-photo-container reset-a flex-grow-1"
            >
              <img
                src={artist.images?.[0] || "assets/img/Vinyl.png"} // Fallback image
                alt={`Foto di ${artist.name}`}
                className="artist-photo img-fluid"
              />
            </Link>
            <div className={`artist-bio text-center text-lg-start flex-grow-1`}>
              <h4 className="fs-2">{artist.name}</h4>
              <p className="fs-5">
                {artist.bio || "Biografia non disponibile."}
              </p>
            </div>
          </div>
        </div>
      ))}

      {hasMore && (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-success mt-4"
            onClick={() => loadArtists(false)}
            disabled={artistList.length === 0}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
