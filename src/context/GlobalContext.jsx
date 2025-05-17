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

  return (
    <GlobalContext.Provider
      value={{
        vynilList,
        fetchVynil,
        artistList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
