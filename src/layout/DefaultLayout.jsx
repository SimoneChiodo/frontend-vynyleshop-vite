import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <div id="wrapper" className="d-flex flex-column">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow-1 mb-4">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
