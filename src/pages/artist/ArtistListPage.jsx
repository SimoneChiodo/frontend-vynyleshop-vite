import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

export default function ArtistListPage() {
  const { artistList } = useGlobalContext();

  return (
    <div className="container">
      <div className="title-and-filters pb-3">
        <div className="d-flex justify-content-between align-items-center pb-1">
          <h1 className="m-0">Artists List</h1>

          <button
            class="btn btn-outline-primary py-2 px-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFilter"
            aria-expanded="true"
            aria-controls="collapseFilter"
          >
            Filters
          </button>
        </div>

        <div class="accordion" id="accordionFilter">
          <div class="accordion-item">
            <div
              id="collapseFilter"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFilter"
            >
              <div class="accordion-body">Filters</div>
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
