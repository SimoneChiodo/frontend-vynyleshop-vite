import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg w-100">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="fs-2 fw-semibold me-4 reset-a" to="/">
          VynyleShop
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Homepage */}
            <li className="nav-item">
              <NavLink
                className="nav-link px-1 mx-1"
                aria-current="page"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-1 mx-1"
                aria-current="page"
                to="/vinyl"
                end
              >
                Vinyl List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-1 mx-1"
                aria-current="page"
                to="/artist"
                end
              >
                Artist List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
