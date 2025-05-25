// Components
import VinylDiscographyCard from "./VinylDiscographyCard";

// CSS Modules
import styles from "../assets/discography.module.css";

export default function Discography({ vinyls }) {
  return (
    <div
      className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 ${styles.pointedLine}`}
    >
      {vinyls.map((vinyl, index) => (
        <VinylDiscographyCard
          key={vinyl.id}
          vinyl={vinyl}
          isList={true}
          isLast={index === vinyls.length - 1}
        />
      ))}
    </div>
  );
}
