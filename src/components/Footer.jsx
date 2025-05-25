import { Link } from "react-router-dom";

// Components
import TextToCopy from "./TextToCopy";

export default function Footer() {
  return (
    <>
      <hr className="w-100" />
      <div className="container mb-4">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <h3>Navigation</h3>
            <ul className="reset-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vinyl">Vinyl List</Link>
              </li>
              <li>
                <Link to="/artist">Band List</Link>
              </li>
            </ul>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src="/assets/img/Vinyl.png" alt="" className="rotate w-50" />
          </div>
          <div className="col text-end">
            <h3>Assistenza</h3>
            <ul className="reset-ul">
              <li>
                <TextToCopy text="email@example.com" />
              </li>
              <li>Mon-Fri: 09.00 - 16.00</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="mb-0">© 2025 VynyleShop</p>
          <div className="d-flex">
            <a href="#" className="me-4">
              Privacy policy
            </a>
            <a href="#">Cookie policy</a>
          </div>
        </div>
      </div>
    </>
  );
}
