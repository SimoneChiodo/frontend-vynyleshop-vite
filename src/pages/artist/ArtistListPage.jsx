import { useEffect, useState } from "react";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

export default function ArtistListPage() {
  const { artistList } = useGlobalContext();

  return (
    <div className="container">
      <h1>Artist List</h1>

      {artistList.map((artist) => (
        <div className="my-4" key={artist.id}>
          <div>
            <img
              src={
                artist.images?.[0] || "assets/img/Vynil.png" // Fallback image
              }
              alt={"Artist Image"}
              className="img_fluid"
            />
            <div className="text-center">
              <a
                href={`/artist/${artist.id}`}
                className="reset-a fs-5 fw-semibold"
              >
                {artist.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
