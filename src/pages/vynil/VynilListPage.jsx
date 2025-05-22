//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VynilCard from "../../components/VynilCard";

export default function VynilListPage() {
  const { vynilList } = useGlobalContext();

  return (
    <>
      <div className="container">
        <div className="title-and-filters pb-3">
          <div className="d-flex justify-content-between align-items-center pb-1">
            <h1 className="m-0">Vynils List</h1>

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

        <div className="row">
          {vynilList.map((vynil) => (
            <VynilCard key={vynil.id} vynil={vynil} />
          ))}
        </div>
      </div>
    </>
  );
}
