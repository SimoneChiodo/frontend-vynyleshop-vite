import { useEffect, useState } from "react";

export default function ArtistListPage() {
  const { VITE_BACKEND_API_URL } = import.meta.env;

  let [artistList, setArtistList] = useState([]);

  const fetchArtist = () => {
    fetch(`${VITE_BACKEND_API_URL}/artist`)
      .then((res) => res.json())
      .then((data) => {
        setArtistList(data);
      });
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <>
      <div className="container">
        <h1>ArtistListPage</h1>

        <ul>
          {artistList.map((artist) => (
            <li key={artist.id}>
              <a href={`/artist/${artist.id}`}>{artist.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
