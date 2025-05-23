import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Global Context
import { useGlobalContext } from "../../context/GlobalContext";

// Components
import ImageCarousel from "../../components/ImageCarousel";

export default function VynilDetailsPage() {
  const { fetchVynil } = useGlobalContext();
  const [vynil, setVynil] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchVynil(id, setVynil);
  }, [id]);

  return (
    <>
      {vynil ? (
        <div className="container vynil-show">
          <Link to="/vynil" className="reset-a">
            <div className="back-button rounded-end position-absolute card py-2 ps-3 pe-3 z-3">
              🔙
            </div>
          </Link>

          <div className="vynil-image-description d-flex flex-column flex-lg-row">
            <div className="img-container d-flex justify-content-center">
              <ImageCarousel images={vynil.images} />
            </div>

            <div className="py-3 py-md-0 px-4">
              <div className="vynil-details">
                <h2 className="mb-2">{vynil.name}</h2>

                <h3>
                  Author:{" "}
                  <Link
                    to={"/artist/" + vynil.artistId}
                    className="reset-a hover_underline"
                  >
                    {vynil.artistName}
                  </Link>
                </h3>

                <h3 className="mb-4">Year: {vynil.releaseYear}</h3>

                <h4>About the vynil: </h4>
                <ul className="fs-1_1">
                  <li>Available: {vynil.available}</li>
                  <li>Genre: {vynil.genre}</li>
                  <li>Format: {vynil.format}</li>
                  <li>Color: {vynil.color}</li>
                  <li>Edition: {vynil.edition}</li>
                  <li>Label: {vynil.label}</li>
                </ul>
              </div>

              <div className="vynil-buttons">
                <Link to="#" className="btn btn-success align-self-end my-2">
                  Add to Cart 🛒
                </Link>
              </div>
            </div>
          </div>

          <h2 className="mb-0">Tracklist</h2>
          <div className="vynil-tracklist d-flex flex-column flex-lg-row">
            <div className="side-one flex-grow-1 mt-2 m-lg-0">
              <h2 className="text-center">Side one</h2>
              <ul className="pointed-ul fs-1_1 ps-1">
                {Array.isArray(vynil.sideone) &&
                  vynil.sideone.map((track, index) => (
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
                {Array.isArray(vynil.sidetwo) &&
                  vynil.sidetwo.map((track, index) => (
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
