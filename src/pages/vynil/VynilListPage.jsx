import { useEffect, useState } from "react";

export default function VynilListPage() {
  const { VITE_BACKEND_API_URL } = import.meta.env;

  let [vynilList, setVynilList] = useState([]);

  const fetchVynils = () => {
    fetch(`${VITE_BACKEND_API_URL}/vynil`)
      .then((res) => res.json())
      .then((data) => {
        setVynilList(data);
      });
  };

  useEffect(() => {
    fetchVynils();
  }, []);

  return (
    <>
      <div className="container">
        <h1>VynilListPage</h1>

        <ul>
          {vynilList.map((vynil) => (
            <li key={vynil.id}>
              <a href={`/vynil/${vynil.id}`}>{vynil.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
