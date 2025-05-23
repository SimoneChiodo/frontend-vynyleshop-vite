import { BrowserRouter, Route, Routes } from "react-router-dom";

// Global variables
import { GlobalProvider } from "./context/GlobalContext";

// Default Layout
import DefaultLayout from "./layout/DefaultLayout";

// Pages
import HomePage from "./pages/home/HomePage";
import VynilListPage from "./pages/vynil/VynilListPage";
import VynilDetailsPage from "./pages/vynil/VynilDetailsPage";
import ArtistListPage from "./pages/artist/ArtistListPage";
import ArtistDetailsPage from "./pages/artist/ArtistDetailsPage";
import Error404 from "./pages/errors/error404";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index element={<HomePage />}></Route>
              <Route path="/vynil" element={<VynilListPage />}></Route>
              <Route path="/vynil/:id" element={<VynilDetailsPage />}></Route>
              <Route path="/artist" element={<ArtistListPage />}></Route>
              <Route path="/artist/:id" element={<ArtistDetailsPage />}></Route>

              {/* Error 404 */}
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
