import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VinylCard from "../../components/VinylCard";

export default function HomePage() {
  const { fetchVinyls } = useGlobalContext();
  const navigate = useNavigate();
  const [vinylList, setVinylList] = useState([]);

  useEffect(() => {
    fetchVinyls(setVinylList, navigate);
  }, []);

  return (
    <>
      <div id="jumbo" className="position-relative overflow-hidden">
        {/* <img
          src="assets/img/Vinyl.png"
          alt="vinyl image"
          className="jumbo-img position-absolute"
          draggable="false"
        /> */}

        <div className="jumbo-text h-100 w-100 d-flex justify-content-center fade-to-white">
          <h1 className="">HomePage</h1>
        </div>
      </div>
      <div className="container">
        {/* NEW SECTION */}
        <h2 className="text-center pt-4 pb-2">New Vinyls</h2>
        <div className="row">
          {vinylList.map((vinyl) => (
            <VinylCard key={vinyl.id} vinyl={vinyl} />
          ))}
        </div>
      </div>
    </>
  );
}
