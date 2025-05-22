// Components
import VynilDiscographyCard from "./VynilDiscographyCard";

// CSS Modules
import styles from "../assets/discography.module.css";

export default function Discography({ vynils }) {
  return (
    <div
      className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 ${styles.pointedLine}`}
    >
      {vynils.map((vynil, index) => (
        <VynilDiscographyCard
          key={vynil.id}
          vynil={vynil}
          isList={true}
          isLast={index === vynils.length - 1}
        />
      ))}
    </div>
  );
}
