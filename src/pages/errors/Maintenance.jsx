import { Link } from "react-router-dom";

export default function Maintenance() {
  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="display-1">Server offline</h1>
        <p className="lead fs-3">Server under maintenance</p>
        <p className="lead fs-3">Please try again later</p>

        <Link to="/" className="btn btn-primary fs-5">
          Retry
        </Link>
      </div>
    </>
  );
}
