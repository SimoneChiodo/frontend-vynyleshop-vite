//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VynilCard from "../../components/VynilCard";

export default function HomePage() {
  const { vynilList } = useGlobalContext();

  return (
    <>
      <div id="jumbo" className="position-relative overflow-hidden">
        {/* <img
          src="assets/img/Vynil.png"
          alt="vynil image"
          className="jumbo-img position-absolute"
          draggable="false"
        /> */}

        <div className="jumbo-text h-100 w-100 d-flex justify-content-center fade-to-white">
          <h1 className="">HomePage</h1>
        </div>
      </div>
      <div className="container">
        {/* NEW SECTION */}
        <h2 className="text-center pt-4 pb-2">New Vynils</h2>
        <div className="row">
          {vynilList.map((vynil) => (
            <VynilCard key={vynil.id} vynil={vynil} />
          ))}
        </div>
      </div>
    </>
  );
}
