import { useNavigate, Link } from "react-router-dom";
import styles from "../assets/discography.module.css";

export default function VynilDiscographyCard({ vynil, isList, isLast }) {
  const navigate = useNavigate();

  return (
    <div className={`col ${styles.pointedListItem}`}>
      <div
        className="card hover_pointer"
        onClick={() => navigate("/vynil/" + vynil.id)}
      >
        <img
          src={vynil.images?.[0] || "assets/img/Vynil.png"}
          className="card-img-top"
          alt="Vynil Cover"
          draggable="false"
        />
        <div className="card-body d-flex flex-column align-items-center pt-0 pb-2">
          <div className="w-100 d-flex justify-content-center align-items-center flex-column flex-grow-1 py-2">
            <h4 className="card-title text-center m-0">{vynil.name}</h4>
            <p className="card-text text-center m-0">by</p>
            <Link
              to={"/artist/" + vynil.artistId}
              className="reset-a hover_underline fs-5 fw-semibold card-text text-center"
            >
              {vynil.artistName}
            </Link>
          </div>
        </div>
      </div>

      {isList && (
        <>
          {!isLast && <span className={styles.line}></span>}
          <span className={styles.point}></span>
        </>
      )}
    </div>
  );
}
