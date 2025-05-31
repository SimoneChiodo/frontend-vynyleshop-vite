import { useNavigate, Link } from "react-router-dom";

export default function VinylCard({ vinyl }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="col">
        <div
          className="card vinyl-card hover-pointer h-100"
          onClick={() => navigate("/vinyl/" + vinyl.id)}
        >
          <div className="image-container position-relative">
            <img
              src={
                vinyl.images?.length > 0
                  ? vinyl.images[0]
                  : "/assets/img/Vinyl.png"
              } // Fallback image
              className="card-img-top"
              alt="Vinyl Cover"
              draggable="false"
            />

            <p className="vynil-card-format position-absolute">
              {vinyl.format} LP
            </p>
          </div>

          <div className="card-body d-flex flex-column align-items-center pt-0 pb-2">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column flex-grow-1 pt-1">
              <h4 className="card-title text-max-2-lines text-center m-0">
                {vinyl.name}
              </h4>
              <p className="card-text text-center m-0">by</p>
              <Link
                to={"/artist/" + vinyl.artistId}
                className="reset-a hover-underline fs-5 fw-semibold card-text text-max-2-lines text-center"
                onClick={(e) => e.stopPropagation()}
              >
                {vinyl.artistName}
              </Link>
            </div>

            <p className="fs-5 text-center hover-pointer m-0 mb-1">
              {vinyl.releaseYear}
            </p>

            <div className="vinyl-card-buttons w-100 d-flex justify-content-between align-items-end mb-2">
              <Link
                className="btn btn-success align-self-end"
                onClick={(e) => e.stopPropagation()}
              >
                Add to Cart
              </Link>

              {vinyl.available > 0 ? (
                <p className="m-0 p-1">Available: {vinyl.available}</p>
              ) : (
                <p className="text-danger fw-semibold m-0 p-1">Not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
