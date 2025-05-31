import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VinylList from "../../components/VinylList";

export default function VinylListPage() {
  const { fetchFilteredVinyls } = useGlobalContext();
  const navigate = useNavigate();
  const [vinylList, setVinylList] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const [name, setName] = useState("");
  const [artistName, setArtist] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [available, setAvailable] = useState("");
  const [format, setFormat] = useState("");

  const filters = { name, artistName, releaseYear, available, format };

  const loadVinyls = (replace) => {
    fetchFilteredVinyls(
      filters,
      replace ? null : lastId,
      12,
      replace ? [] : vinylList,
      setVinylList,
      setLastId,
      setHasMore,
      navigate
    );
  };

  // First load
  useEffect(() => {
    loadVinyls(false);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setHasMore(true); // riattiva il pulsante load
    loadVinyls(true);
  };

  return (
    <>
      <div className="container mb-5">
        <div className="title-and-filters pb-3">
          <div className="d-flex justify-content-between align-items-center pb-2">
            <h1 className="m-0">Vinyl List</h1>
            <button
              className="btn btn-outline-primary py-2 px-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFilter"
              aria-expanded="false"
              aria-controls="collapseFilter"
            >
              Filters
            </button>
          </div>

          {/* Search Filters */}
          <div id="collapseFilter" className="collapse">
            <div className="pt-2 px-4">
              <form className="row g-3" onSubmit={handleOnSubmit}>
                {/* Name */}
                <div className="col-md-6">
                  <label htmlFor="validationCustom01" className="form-label">
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
                {/* ArtistName */}
                <div className="col-md-6">
                  <label htmlFor="validationCustom02" className="form-label">
                    ArtistName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    value={artistName}
                    onChange={(e) => setArtist(e.target.value)}
                  />
                </div>
                {/* ReleaseYear */}
                <div className="col-md-12 col-lg-4">
                  <label htmlFor="validationCustom03" className="form-label">
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
                  <label htmlFor="validationCustom04" className="form-label">
                    Available
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="1">Available</option>
                    <option value="0">Unavailable</option>
                  </select>
                </div>
                {/* Format */}
                <div className="col-md-6 col-lg-4">
                  <label htmlFor="validationCustom05" className="form-label">
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
                    aria-expanded="false"
                    aria-controls="collapseFilter"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-3">
          <VinylList vinylList={vinylList} />
        </div>

        {hasMore && (
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-success mt-4"
              onClick={() => loadVinyls(false)}
              disabled={vinylList.length === 0}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
}
