import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

export default function VynilDetailsPage() {
  const { fetchVynilImages, fetchVynil } = useGlobalContext();
  const [imgUrl, setImgUrl] = useState(null);
  const [vynil, setVynil] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!vynil) return;

    async function loadImage() {
      try {
        const img = await fetchVynilImages(vynil.name, vynil.artistName);
        setImgUrl(img);
      } catch (error) {
        console.error(error);
        setImgUrl(null);
      }
    }

    loadImage();
  }, [vynil]);

  useEffect(() => {
    fetchVynil(id, setVynil);
  }, [id]);

  return (
    <>
      {vynil ? (
        <div className="container vynil-show">
          <a href="/vynil" className="reset-a">
            <div className="back-button rounded-end position-absolute card py-2 ps-3 pe-3">
              🔙
            </div>
          </a>

          <div className="vynil-image-description d-flex flex-column flex-md-row">
            <div className="img-container">
              <img
                src={imgUrl || "assets/img/Vynil.png"} // Fallback image
                alt="Vynil Cover"
                className="img-fluid"
              />
            </div>

            <div className="py-3 py-md-0 px-4">
              <div className="">
                <h2 className="mb-2">{vynil.name}</h2>

                <h3>
                  Author:{" "}
                  <a href={"/artist/" + vynil.artistId} className="reset-a">
                    {vynil.artistName}
                  </a>
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
                  <li>Code: {vynil.code}</li>
                </ul>
              </div>

              <div className="">
                <a href="#" className="btn btn-success align-self-end my-2">
                  Add to Cart 🛒
                </a>
              </div>
            </div>
          </div>

          <div className="vynil-tracklist mt-4">
            <h2 className="mb-3">Tracklist</h2>
            <ul className="reset-ul fs-1_1">
              {Array.isArray(vynil.tracklist) &&
                vynil.tracklist.map((track, index) => (
                  <li key={index}>
                    <span className="fw-semibold">{index + 1}</span>- {track}
                  </li>
                ))}
            </ul>
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
