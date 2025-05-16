import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const { VITE_BACKEND_API_URL } = import.meta.env;

  let [vynilList, setVynilList] = useState([]);
  let [artistList, setArtistList] = useState([]);

  const fetchVynils = () => {
    fetch(`${VITE_BACKEND_API_URL}/vynil`)
      .then((res) => res.json())
      .then((data) => {
        setVynilList(data);
      });
  };

  const fetchArtist = () => {
    fetch(`${VITE_BACKEND_API_URL}/artist`)
      .then((res) => res.json())
      .then((data) => {
        setArtistList(data);
      });
  };

  useEffect(() => {
    fetchVynils();
    fetchArtist();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        vynilList,
        artistList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
