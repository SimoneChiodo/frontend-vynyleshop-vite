export default function ImageCarousel({ images }) {
  return (
    <div id="carouselIndicators" className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image || "/assets/img/Vinyl.png"} // Fallback image
              className="d-block w-100"
              alt="Vinyl Image"
            />
          </div>
        ))}
      </div>

      <div className="carousel-indicators custom-thumbnails mt-3">
        {images.map((image, index) => (
          <button
            key={`thumb-${index}`}
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to={index}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            className={index === 0 ? "active" : ""}
          >
            <img
              src={image || "/assets/img/Vinyl.png"} // Fallback image
              alt="Vinyl Image"
              className="hover_pointer"
              draggable="false"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
