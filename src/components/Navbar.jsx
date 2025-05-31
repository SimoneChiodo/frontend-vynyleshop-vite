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
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

          {/* User Info */}
          <div className="d-flex justify-content-end align-items-center me-2 m-lg-0">
            <a className="reset-a hover-pointer m-0 me-1 pe-1 border-end border-2 border-secondary py-1">
              View cart 🛒
            </a>
            <button className="btn btn-primary ms-1">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
