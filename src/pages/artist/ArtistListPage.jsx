import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

export default function ArtistListPage() {
  const { fetchSearchArtist } = useGlobalContext();
  const [artistList, setArtistList] = useState([]);
  const [name, setName] = useState("");

  const loadArtists = () => {
    fetchSearchArtist(name, setArtistList);
  };

  useEffect(() => {
    loadArtists();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loadArtists();
  };

  return (
    <div className="container">
      <div className="title-and-filters pb-3">
        <div className="d-flex justify-content-between align-items-center pb-1">
          <h1 className="m-0">Artists List</h1>

          <button
            className="btn btn-outline-primary py-2 px-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFilter"
            aria-expanded="true"
            aria-controls="collapseFilter"
          >
            Filters
          </button>
        </div>

        <div className="accordion" id="accordionFilter">
          <div className="accordion-item">
            <div
              id="collapseFilter"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFilter"
            >
              <div className="accordion-body">
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
                      aria-controls="collapseFilter"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
