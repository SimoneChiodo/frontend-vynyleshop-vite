import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VynilCard from "../../components/VynilCard";

export default function VynilListPage() {
  const { fetchFilteredVynils } = useGlobalContext();
  const navigate = useNavigate();
  const [vynilList, setVynilList] = useState([]);

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [available, setAvailable] = useState("");
  const [format, setFormat] = useState("");

  const loadVynils = () => {
    fetchFilteredVynils(
      { name, artist, releaseYear, available, format },
      setVynilList,
      navigate
    );
  };

  useEffect(() => {
    loadVynils();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loadVynils();
  };

  return (
    <>
      <div className="container">
        <div className="title-and-filters pb-3">
          <div className="d-flex justify-content-between align-items-center pb-1">
            <h1 className="m-0">Vynils List</h1>

            <button
              className="btn btn-outline-primary py-2 px-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFilter"
              aria-expanded="true"
              aria-controls="collapseFilter"
            >
              Filters
            </button>
          </div>

          <div className="accordion" id="accordionFilter">
            <div className="accordion-item">
              <div
                id="collapseFilter"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFilter"
              >
                <div className="accordion-body">
                  <form className="row g-3" onSubmit={handleOnSubmit}>
                    {/* Name */}
                    <div className="col-md-6">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {/* Artist */}
                    <div className="col-md-6">
                      <label
                        htmlFor="validationCustom02"
                        className="form-label"
                      >
                        Artist
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                      />
                    </div>
                    {/* ReleaseYear */}
                    <div className="col-md-12 col-lg-4">
                      <label
                        htmlFor="validationCustom03"
                        className="form-label"
                      >
                        ReleaseYear
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="validationCustom03"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                      />
                    </div>
                    {/* Available */}
                    <div className="col-md-6 col-lg-4">
                      <label
                        htmlFor="validationCustom04"
                        className="form-label"
                      >
                        Available
                      </label>
                      <select
                        className="form-select"
                        id="validationCustom04"
                        value={available}
                        onChange={(e) => setAvailable(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="true">Available</option>
                        <option value="false">Unavailable</option>
                      </select>
                    </div>
                    {/* Format */}
                    <div className="col-md-6 col-lg-4">
                      <label
                        htmlFor="validationCustom05"
                        className="form-label"
                      >
                        Format
                      </label>
                      <select
                        className="form-select"
                        id="validationCustom05"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="33">33</option>
                        <option value="45">45</option>
                        <option value="78">78</option>
                      </select>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      <button
                        className="btn btn-primary fs-5 px-5"
                        type="submit"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFilter"
                        aria-controls="collapseFilter"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
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
