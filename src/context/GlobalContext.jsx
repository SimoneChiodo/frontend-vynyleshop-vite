import { createContext, useContext, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const { VITE_BACKEND_API_URL } = import.meta.env;

  // Function that check every fetch response status
  const checkStatusError = (res, navigate) => {
    if (!res.ok) {
      // Error 404 - Page Not Found
      if (res.status === 404) navigate("/404");
    }
  };

  // *************************
  //      VINYLS METHODS
  // *************************

  // GET N VINYLS WITH OPTIONAL FILTERS
  const fetchFilteredVinyls = (
    filters,
    lastId,
    size,
    vynils,
    setVinyls,
    setLastId,
    setHasMore,
    navigate
  ) => {
    // URLSearchParams transforms the params into URL valid parameters
    const params = new URLSearchParams();

    // Starting ID
    if (lastId) params.append("lastId", lastId);

    // Number of vinyls
    params.append("limit", size);

    // Optional filters
    if (filters.name) params.append("name", filters.name);
    if (filters.artistName) params.append("artistName", filters.artistName);
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
        // If there is a result
        if (data.length > 0) {
          // Keep the old vinyls and add the new ones
          const newVinyls = [...vynils, ...data];
          setVinyls(newVinyls);

          // Save the last id, it serves as a starting point for the next fetch
          const newLastId = data[data.length - 1].id;
          setLastId(newLastId);

          // Check if there are other vinyls
          checkIfMoreVinylsExist(filters, newLastId, navigate, setHasMore);
        } else {
          // There are no more vinyls
          setHasMore(false);
        }
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // CHECK STILL VINYLS - Check if there are still more vinyls (useful in combo with fetchFilteredVinyls())
  const checkIfMoreVinylsExist = (filters, lastId, navigate, setHasMore) => {
    const params = new URLSearchParams();

    // Starting ID
    if (lastId) params.append("lastId", lastId);

    // Number of vinyls
    params.append("limit", 1);

    // Optional filters
    if (filters.name) params.append("name", filters.name);
    if (filters.artistName) params.append("artistName", filters.artistName);
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
        // If there are other vinyls set true else false
        setHasMore(data.length > 0);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // GET ONE VINYL
  const fetchVinyl = (vinylId, setVinyl, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/vinyl/${vinylId}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        // Set the result
        setVinyl(data);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // GET RANDOM VINYLS
  const fetchRandomVinyls = (size, setVinyls, navigate) => {
    const params = new URLSearchParams();

    // Number of vinyls
    params.append("limit", size);

    fetch(`${VITE_BACKEND_API_URL}/vinyl/randoms?${params.toString()}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setVinyls(data);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // GET RANDOM VINYL
  const fetchRandomVinyl = (setVinyl, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/vinyl/random`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setVinyl(data);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // **************************
  //      ARTISTS METHODS
  // **************************

  // GET N ARTISTS WITH OPTIONAL FILTERS
  const fetchFilteredArtists = (
    filters,
    lastId,
    size,
    artists,
    setArtists,
    setLastId,
    setHasMore,
    navigate
  ) => {
    // URLSearchParams transforms the params into URL valid parameters
    const params = new URLSearchParams();

    // Starting ID
    if (lastId) params.append("lastId", lastId);

    // Number of artists
    params.append("limit", size);

    // Optional filters
    if (filters.name) params.append("name", filters.name);

    fetch(`${VITE_BACKEND_API_URL}/artist/filter?${params.toString()}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        // If there is a result
        if (data.length > 0) {
          // Keep the old artists and add the new ones
          const newArtists = [...artists, ...data];
          setArtists(newArtists);

          // Save the last id, it serves as a starting point for the next fetch
          const newLastId = data[data.length - 1].id;
          setLastId(newLastId);

          // Check if there are other artists
          checkIfMoreArtistsExist(filters, newLastId, navigate, setHasMore);
        } else {
          // There are no more artists
          setHasMore(false);
        }
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // CHECK STILL ARTISTS - Check if there are still more vinyls (useful in combo with fetchFilteredArtists())
  const checkIfMoreArtistsExist = (filters, lastId, navigate, setHasMore) => {
    const params = new URLSearchParams();

    // Starting ID
    params.append("lastId", lastId);

    // Number of artists
    params.append("limit", 1);

    // Optional filters
    if (filters.name) params.append("name", filters.name);

    fetch(`${VITE_BACKEND_API_URL}/artist/filter?${params.toString()}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        // If there are other vinyls set true else false
        setHasMore(data.length > 0);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // GET ONE ARTIST
  const fetchArtist = (artistId, setArtist, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/artist/${artistId}`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        // Set the result
        setArtist(data);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  // GET RANDOM ARTIST
  const fetchRandomArtist = (setArtist, navigate) => {
    fetch(`${VITE_BACKEND_API_URL}/artist/random`)
      .then((res) => {
        checkStatusError(res, navigate);
        return res.json();
      })
      .then((data) => {
        setArtist(data);
      })
      .catch(() => {
        navigate("/404");
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        // Vynils fetch
        fetchFilteredVinyls,
        fetchVinyl,
        fetchRandomVinyls,
        fetchRandomVinyl,
        // Artists fetch
        fetchFilteredArtists,
        fetchArtist,
        fetchRandomArtist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
