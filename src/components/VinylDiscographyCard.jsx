import { useNavigate, Link } from "react-router-dom";
import styles from "../assets/discography.module.css";

export default function VinylDiscographyCard({ vinyl, isList, isLast }) {
  const navigate = useNavigate();

  return (
    <div className={`col ${styles.pointedListItem}`}>
      <img
        src={vinyl.images?.[0] || "assets/img/Vinyl.png"}
        className="img-fluid hover_pointer"
        onClick={() => navigate("/vinyl/" + vinyl.id)}
        alt="Vinyl Cover"
        draggable="false"
      />

      <h4
        className="text-center hover_pointer m-0 pt-2 w-100 h-100"
        onClick={() => navigate("/vinyl/" + vinyl.id)}
      >
        {vinyl.name}
      </h4>

      <p className="fs-5 text-center hover_pointer m-0 pt-2 w-100">
        {vinyl.releaseYear}
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
