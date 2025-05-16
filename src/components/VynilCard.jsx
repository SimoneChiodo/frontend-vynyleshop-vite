import { useState, useEffect } from "react";

//Global Context
import { useGlobalContext } from "../context/GlobalContext";

export default function VynilCard({ vynil }) {
  const { fetchVynilImages } = useGlobalContext();
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
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
  }, [vynil.name, vynil.artistName]);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card vynil-card h-100">
          <img
            src={imgUrl || "assets/img/Vynil.png"} // Fallback image
            className="card-img-top"
            alt="Vynil Cover"
            draggable="false"
          />

          <div className="card-body d-flex flex-column align-items-center pb-2">
            <h4 className="card-title text-max-2-lines text-center m-0">
              {vynil.name}
            </h4>
            <p className="card-text text-center m-0">by</p>
            <h5 className="card-text text-max-2-lines text-center">
              {vynil.artistName}
            </h5>

            <div className="vynil-card-buttons w-100 d-flex justify-content-between align-items-end flex-grow-1">
              <a href={"/vynil/" + vynil.id} className="btn btn-primary my-2">
                View Details
              </a>

              <a href="#" className="btn btn-success align-self-end my-2">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
