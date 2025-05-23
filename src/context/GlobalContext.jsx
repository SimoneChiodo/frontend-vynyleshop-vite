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

  // VYNILS FILTERED
  const fetchFilteredVynils = (filters, setFilteredVynils) => {
    // NOTE: Type URLSearchParams automatically convert special characters
    const params = new URLSearchParams();

    if (filters.name) params.append("name", filters.name);
    if (filters.artist) params.append("artist", filters.artist);
    if (filters.releaseYear) params.append("releaseYear", filters.releaseYear);
    if (filters.available !== undefined)
      params.append("available", filters.available);
    if (filters.format) params.append("format", filters.format);

    fetch(`${VITE_BACKEND_API_URL}/vynil/filter?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredVynils(data);
      });
  };

  // VYNILS SHOW
  const fetchVynil = (vynilId, setVynil, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/vynil/${vynilId}`)
      .then((res) => res.json())
      .then((data) => {
        setVynil(data);
      })
      .catch(() => {
        navigate("/404");
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

  // ARTISTS SEARCH
  const fetchSearchArtist = (name, setSearchArtists) => {
    // NOTE: Type URLSearchParams automatically convert special characters
    const params = new URLSearchParams();

    if (name) params.append("name", name);

    fetch(`${VITE_BACKEND_API_URL}/artist/search?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchArtists(data);
      });
  };

  // ARTISTS SHOW
  const fetchArtist = (artistId, setArtist, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/artist/${artistId}`)
      .then((res) => res.json())
      .then((data) => {
        setArtist(data);
      })
      .catch(() => {
        navigate("/404");
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
        fetchFilteredVynils,
        fetchVynil,
        artistList,
        fetchSearchArtist,
        fetchArtist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
