import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VinylList from "../../components/VinylList";

export default function HomePage() {
  const { fetchLatestVinyls, fetchRandomVinyls, fetchRandomArtists } =
    useGlobalContext();
  const navigate = useNavigate();
  const [vinylList, setVinylList] = useState([]);
  const [randomVinylList, setRandomVinylList] = useState([]);
  const [randomArtistList, setRandomArtistList] = useState([]);

  useEffect(() => {
    fetchLatestVinyls(8, [], setVinylList, navigate);
    fetchRandomVinyls(1, [], setRandomVinylList, navigate);
    fetchRandomArtists(1, [], setRandomArtistList, navigate);
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
        {/* LAST CREATED 8 VYNILS */}
        <div className="news">
          <h2 className="text-center pt-4 pb-2">New Vinyls</h2>
          <VinylList vinylList={vinylList} />
        </div>

        {/* VINYL RANDOM */}
        <div className="vinyl-random my-5">
          <h2 className="text-center pt-4 pb-2">Take a look at this vinyl!</h2>
          <VinylList vinylList={randomVinylList} />
        </div>

        {/* ARTIST RANDOM */}
        <div className="artist-random my-5">
          <h2 className="text-center pt-4 pb-2">Take a look at this artist!</h2>
          {randomArtistList?.[0]?.name}
        </div>

        {/* TRIP ADVISOR */}
        <div className="reviews my-5">
          <h2 className="text-center pt-4 pb-2">Our customer reviews!</h2>
          <p>Hello!</p>
        </div>
      </div>
    </>
  );
}
