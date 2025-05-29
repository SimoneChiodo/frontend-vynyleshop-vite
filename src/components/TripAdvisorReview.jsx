export default function TripAdvisorReview({ name, time, stars, review }) {
  return (
    <div className="shadow-lg hover-zoom rounded-2 p-3">
      <div className="top row">
        <div className="col-10 pfp d-flex">
          <div className="profile-picture">
            <img
              src="/assets/icon/user-icon.svg"
              alt="User"
              draggable="false"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="m-0">{name}</p>
            <p className="m-0 text-gray">{time}</p>
          </div>
        </div>
        <div className="col-2 trip-advisor-logo d-flex align-items-center justify-content-end">
          <img
            src="/assets/icon/tripadvisor-icon.svg"
            alt="Tripadvisor"
            draggable="false"
            className="tripadvisor-icon"
          />
        </div>
      </div>
      <div className="stars d-flex py-2">
        {Array.from({ length: stars }, (_, index) => (
          <img
            key={`star-${index}`}
            src="/assets/icon/star-icon.svg"
            alt="Star"
            draggable="false"
            className="star-icon"
          />
        ))}
      </div>
      <div className="bottom fs-5">{review}</div>
    </div>
  );
}
