import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const {
    VITE_BACKEND_API_URL,
    VITE_VYNIL_IMAGES_API_URL,
    VITE_VYNIL_IMAGES_API_TOKEN,
  } = import.meta.env;

  let [vynilList, setVynilList] = useState([]);
  let [artistList, setArtistList] = useState([]);

  // VYNILS INDEX
  const fetchVynils = () => {
    fetch(`${VITE_BACKEND_API_URL}/vynil`)
      .then((res) => res.json())
      .then((data) => {
        setVynilList(data);
      });
  };

  // VYNIL IMAGE
  const fetchVynilImages = async (vynilName, artistName) => {
    const query = new URLSearchParams({
      q: `${vynilName} ${artistName}`,
      type: "release",
      token: VITE_VYNIL_IMAGES_API_TOKEN,
    });

    const response = await fetch(
      `${VITE_VYNIL_IMAGES_API_URL}/database/search?${query}`
    );
    const data = await response.json();

    let bestMatch = data.results.find((r) => isMatch(r, vynilName, artistName));

    if (!bestMatch && data.results.length > 0) {
      bestMatch = tmp;
    }

    return bestMatch?.cover_image || null;
  };

  // ARTISTS INDEX
  const fetchArtist = () => {
    fetch(`${VITE_BACKEND_API_URL}/artist`)
      .then((res) => res.json())
      .then((data) => {
        setArtistList(data);
      });
  };

  // Initialize the data
  useEffect(() => {
    fetchVynils();
    fetchArtist();
  }, []);

  // Function to normalize the text (covert to lowercase and remove special characters)
  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[\W_]+/g, " ")
      .trim();
  }

  // Function to check if the title contains both the vynil name and artist name. It's used in fetchVynilImages()
  function isMatch(result, vynilName, artistName) {
    const title = normalize(result.title);
    const normVynil = normalize(vynilName);
    const normArtist = normalize(artistName);
    return title.includes(normVynil) && title.includes(normArtist);
  }

  return (
    <GlobalContext.Provider
      value={{
        vynilList,
        fetchVynilImages,
        artistList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
