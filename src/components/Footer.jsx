import { Link } from "react-router-dom";

// Components
import TextToCopy from "./TextToCopy";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="container mb-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* First Column */}
          <div className="col text-center text-md-start">
            <h2>Navigation</h2>
            <ul className="reset-ul">
              <li>
                <Link to="/" className="reset-a hover_pointer hover_underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/vinyl"
                  className="reset-a hover_pointer hover_underline"
                >
                  Vinyl List
                </Link>
              </li>
              <li>
                <Link
                  to="/artist"
                  className="reset-a hover_pointer hover_underline"
                >
                  Artist List
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="col d-flex flex-column align-items-center">
            <h2 className="d-md-none">Social</h2>

            <img
              src="/assets/img/Vinyl.png"
              alt="Vinyl"
              className="rotate w-50 mb-3"
            />

            <nav className="d-flex justify-content-between align-items-center">
              <a
                href="https://www.facebook.com"
                className="reset-a social-icon"
                target="_blank"
              >
                <img src="/assets/icon/facebook-brands.svg" alt="Facebook" />
              </a>

              <a
                href="https://www.x.com"
                className="reset-a social-icon"
                target="_blank"
              >
                <img src="/assets/icon/x-twitter-brands.svg" alt="Twitter" />
              </a>

              <a
                href="https://www.instagram.com"
                className="reset-a social-icon"
                target="_blank"
              >
                <img src="/assets/icon/instagram-brands.svg" alt="Instagram" />
              </a>
            </nav>
          </div>

          {/* Third Column */}
          <div className="col text-center text-md-end">
            <h2>Assistenza</h2>
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
