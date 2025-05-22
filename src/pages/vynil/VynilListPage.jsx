//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VynilCard from "../../components/VynilCard";

export default function VynilListPage() {
  const { vynilList } = useGlobalContext();

  return (
    <>
      <div className="container">
        <h1>VynilListPage</h1>

        <div className="row">
          {vynilList.map((vynil) => (
            <VynilCard key={vynil.id} vynil={vynil} />
          ))}
        </div>
      </div>
    </>
  );
}
