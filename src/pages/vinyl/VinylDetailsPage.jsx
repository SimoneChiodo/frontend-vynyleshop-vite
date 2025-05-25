import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Global Context
import { useGlobalContext } from "../../context/GlobalContext";

// Components
import ImageCarousel from "../../components/ImageCarousel";

export default function VinylDetailsPage() {
  const { fetchVinyl } = useGlobalContext();
  const navigate = useNavigate();
  const [vinyl, setVinyl] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchVinyl(id, setVinyl, navigate);
  }, [id]);

  return (
    <>
      {vinyl ? (
        <div className="container vinyl-show">
          <Link to="/vinyl" className="reset-a">
            <div className="back-button rounded-end position-absolute card py-2 ps-3 pe-3 z-3">
              🔙
            </div>
          </Link>

          <div className="vinyl-image-description d-flex flex-column flex-lg-row">
            <div className="img-container d-flex justify-content-center">
              <ImageCarousel images={vinyl.images} />
            </div>

            <div className="py-3 py-md-0 px-4">
              <div className="vinyl-details">
                <h2 className="mb-2">{vinyl.name}</h2>

                <h3>
                  Author:{" "}
                  <Link
                    to={"/artist/" + vinyl.artistId}
                    className="reset-a hover_underline"
                  >
                    {vinyl.artistName}
                  </Link>
                </h3>

                <h3 className="mb-4">Year: {vinyl.releaseYear}</h3>

                <h4>About the vinyl: </h4>
                <ul className="fs-1_1">
                  <li>Available: {vinyl.available}</li>
                  <li>Genre: {vinyl.genre}</li>
                  <li>Format: {vinyl.format}</li>
                  <li>Color: {vinyl.color}</li>
                  <li>Edition: {vinyl.edition}</li>
                  <li>Label: {vinyl.label}</li>
                </ul>
              </div>

              <div className="vinyl-buttons">
                <Link to="#" className="btn btn-success align-self-end my-2">
                  Add to Cart 🛒
                </Link>
              </div>
            </div>
          </div>

          <h2 className="mb-0">Tracklist</h2>
          <div className="vinyl-tracklist d-flex flex-column flex-lg-row">
            <div className="side-one flex-grow-1 mt-2 m-lg-0">
              <h2 className="text-center">Side one</h2>
              <ul className="pointed-ul fs-1_1 ps-1">
                {Array.isArray(vinyl.sideone) &&
                  vinyl.sideone.map((track, index) => (
                    <li key={index} className="pointed-li">
                      <span className="line"></span>
                      <span className="point"></span>
                      <div className="blob ">{track}</div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="side-two flex-grow-1 mt-3 m-lg-0">
              <h2 className="text-center">Side two</h2>
              <ul className="pointed-ul fs-1_1 ps-1">
                {Array.isArray(vinyl.sidetwo) &&
                  vinyl.sidetwo.map((track, index) => (
                    <li key={index} className="pointed-li">
                      <span className="line"></span>
                      <span className="point"></span>
                      <div className="blob ">{track}</div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center my-5">
          <h2>Caricamento in corso...</h2>
        </div>
      )}
    </>
  );
}
