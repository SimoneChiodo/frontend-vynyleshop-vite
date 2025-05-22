import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const { VITE_BACKEND_API_URL } = import.meta.env;

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

  // VYNILS SHOW
  const fetchVynil = (vynilId, setVynil) => {
    fetch(`${VITE_BACKEND_API_URL}/vynil/${vynilId}`)
      .then((res) => res.json())
      .then((data) => {
        setVynil(data);
      });
  };

  // ARTISTS INDEX
  const fetchArtists = () => {
    fetch(`${VITE_BACKEND_API_URL}/artist`)
      .then((res) => res.json())
      .then((data) => {
        setArtistList(data);
      });
  };

  // ARTISTS SHOW
  const fetchArtist = (artistId, setArtist) => {
    fetch(`${VITE_BACKEND_API_URL}/artist/${artistId}`)
      .then((res) => res.json())
      .then((data) => {
        setArtist(data);
      });
  };

  // Initialize the data
  useEffect(() => {
    fetchVynils();
    fetchArtists();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        vynilList,
        fetchVynil,
        artistList,
        fetchArtist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
