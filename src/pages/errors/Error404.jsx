import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="display-1">404</h1>
        <p className="lead fs-4">Pagina non trovata</p>

        <Link to="/" className="btn btn-primary fs-5">
          Torna alla Home
        </Link>
      </div>
    </>
  );
}
