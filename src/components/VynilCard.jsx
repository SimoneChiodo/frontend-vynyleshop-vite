import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../context/GlobalContext";

export default function VynilCard({ vynil }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div
          className="card vynil-card hover_pointer h-100"
          onClick={() => navigate("/vynil/" + vynil.id)}
        >
          <img
            src={vynil.image || "assets/img/Vynil.png"} // Fallback image
            className="card-img-top"
            alt="Vynil Cover"
            draggable="false"
          />

          <div className="card-body d-flex flex-column align-items-center pt-0 pb-2">
            <div className="w-100 d-flex justify-content-center align-items-center flex-column flex-grow-1 py-2">
              <h4 className="card-title text-max-2-lines text-center m-0">
                {vynil.name}
              </h4>
              <p className="card-text text-center m-0">by</p>
              <a
                href={"/artist/" + vynil.artistId}
                className="reset-a hover_underline fs-5 fw-semibold card-text text-max-2-lines text-center"
              >
                {vynil.artistName}
              </a>
            </div>

            <div className="vynil-card-buttons w-100 d-flex justify-content-center align-items-end">
              {/* <a href={"/vynil/" + vynil.id} className="btn btn-primary my-2">
                  View Details
                </a> */}

              <a href="#" className="btn btn-success align-self-end my-2">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
