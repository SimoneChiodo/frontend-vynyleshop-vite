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
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="Vynil Cover" />
          <div className="card-body">
            <h5 className="card-title">{vynil.name}</h5>
            <p className="card-text">{vynil.artistName}</p>
            <a href={"/vynil/" + vynil.id} className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
