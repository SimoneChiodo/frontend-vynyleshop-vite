// Components
import VinylCard from "../components/VinylCard";

export default function VinylList({ vinylList }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
        {vinylList.map((vinyl) => (
          <VinylCard key={vinyl.id} vinyl={vinyl} />
        ))}
      </div>
    </>
  );
}
