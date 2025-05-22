import { useNavigate, Link } from "react-router-dom";
import styles from "../assets/discography.module.css";

export default function VynilDiscographyCard({ vynil, isList, isLast }) {
  const navigate = useNavigate();

  return (
    <div className={`col ${styles.pointedListItem}`}>
      <img
        src={vynil.images?.[0] || "assets/img/Vynil.png"}
        className="img-fluid hover_pointer"
        onClick={() => navigate("/vynil/" + vynil.id)}
        alt="Vynil Cover"
        draggable="false"
      />

      <h4
        className="text-center hover_pointer m-0 pt-2 w-100 h-100"
        onClick={() => navigate("/vynil/" + vynil.id)}
      >
        {vynil.name}
      </h4>

      <p className="fs-5 text-center hover_pointer m-0 pt-2 w-100">
        {vynil.releaseYear}
      </p>

      {isList && (
        <>
          {!isLast && <span className={styles.line}></span>}
          <span className={styles.point}></span>
        </>
      )}
    </div>
  );
}
