import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const { VITE_BACKEND_API_URL } = import.meta.env;

  // Function that check every fetch response status
  const checkStatusError = (res, navigate) => {
    if (!res.ok) {
      // Error 404 - Page Not Found
      if (res.status === 404) navigate("/404");
      // Error 500 - Internal Server Error
      if (res.status === 500) navigate("/maintenance");
    }
  };

  // VYNILS INDEX
  const fetchVinyls = (setVinyls, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/vinyl`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setVinyls(data);
      })
      .catch(() => {
        // Servers Offline
        navigate("/maintenance");
      });
  };

  // VYNILS FILTERED
  const fetchFilteredVinyls = (filters, setFilteredVinyls, navigate) => {
    // NOTE: Type URLSearchParams automatically convert special characters
    const params = new URLSearchParams();

    if (filters.name) params.append("name", filters.name);
    if (filters.artist) params.append("artist", filters.artist);
    if (filters.releaseYear) params.append("releaseYear", filters.releaseYear);
    if (filters.available !== undefined)
      params.append("available", filters.available);
    if (filters.format) params.append("format", filters.format);

    fetch(`${VITE_BACKEND_API_URL}/vinyl/filter?${params.toString()}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setFilteredVinyls(data);
      })
      .catch(() => {
        // Servers Offline
        navigate("/maintenance");
      });
  };

  // VYNILS SHOW
  const fetchVinyl = (vinylId, setVinyl, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/vinyl/${vinylId}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setVinyl(data);
      })
      .catch(() => {
        // Servers Offline
        navigate("/maintenance");
      });
  };

  // ARTISTS INDEX
  const fetchArtists = (setArtists, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/artist`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setArtists(data);
      })
      .catch(() => {
        // Servers Offline
        navigate("/maintenance");
      });
  };

  // ARTISTS SEARCH
  const fetchSearchArtist = (name, setSearchArtists, navigate) => {
    // NOTE: Type URLSearchParams automatically convert special characters
    const params = new URLSearchParams();

    if (name) params.append("name", name);

    fetch(`${VITE_BACKEND_API_URL}/artist/search?${params.toString()}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setSearchArtists(data);
      })
      .catch(() => {
        // Servers Offline
        navigate("/maintenance");
      });
  };

  // ARTISTS SHOW
  const fetchArtist = (artistId, setArtist, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/artist/${artistId}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setArtist(data);
      })
      .catch(() => {
        // Servers Offline
        navigate("/maintenance");
      });
  };

  // Initialize the data
  useEffect(() => {
    fetchVinyls();
    fetchArtists();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        fetchVinyls,
        fetchFilteredVinyls,
        fetchVinyl,
        fetchArtists,
        fetchSearchArtist,
        fetchArtist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
