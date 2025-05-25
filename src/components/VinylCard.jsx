import { useNavigate, Link } from "react-router-dom";

export default function VinylCard({ vinyl }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div
          className="card vinyl-card hover_pointer h-100"
          onClick={() => navigate("/vinyl/" + vinyl.id)}
        >
          <img
            src={vinyl.images?.[0] || "assets/img/Vinyl.png"} // Fallback image
            className="card-img-top"
            alt="Vinyl Cover"
            draggable="false"
          />

          <div className="card-body d-flex flex-column align-items-center pt-0 pb-2">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column flex-grow-1 py-2">
              <h4 className="card-title text-max-2-lines text-center m-0">
                {vinyl.name}
              </h4>
              <p className="card-text text-center m-0">by</p>
              <Link
                href={"/artist/" + vinyl.artistId}
                className="reset-a hover_underline fs-5 fw-semibold card-text text-max-2-lines text-center"
              >
                {vinyl.artistName}
              </Link>
            </div>

            <p className="fs-5 text-center hover_pointer m-0 mb-1">
              {vinyl.releaseYear}
            </p>

            <div className="vinyl-card-buttons w-100 d-flex justify-content-center align-items-end">
              <Link to="#" className="btn btn-success align-self-end mb-2">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
