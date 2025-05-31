import { useNavigate, Link } from "react-router-dom";
import styles from "../assets/discography.module.css";

export default function VinylDiscographyCard({ vinyl, isList, isLast }) {
  const navigate = useNavigate();

  return (
    <div className={`col ${styles.pointedListItem}`}>
      <img
        src={
          vinyl.images?.length > 0 ? vinyl.images[0] : "/assets/img/Vinyl.png"
        } // Fallback image
        className="img-fluid hover-pointer"
        onClick={() => navigate("/vinyl/" + vinyl.id)}
        alt="Vinyl Cover"
        draggable="false"
      />

      <h4
        className="text-center hover-pointer m-0 pt-2 w-100 h-100"
        onClick={() => navigate("/vinyl/" + vinyl.id)}
      >
        {vinyl.name}
      </h4>

      <p
        className="fs-5 text-center hover-pointer m-0 pt-2 w-100"
        onClick={() => navigate("/vinyl/" + vinyl.id)}
      >
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
