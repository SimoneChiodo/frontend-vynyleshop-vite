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
              <Route path="*" element={""}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
