import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//Global Context
import { useGlobalContext } from "../../context/GlobalContext";

//Components
import VinylList from "../../components/VinylList";
import TripAdvisorReview from "../../components/TripAdvisorReview";

export default function HomePage() {
  const { fetchRandomVinyls, fetchRandomVinyl, fetchRandomArtist } =
    useGlobalContext();
  const navigate = useNavigate();
  const [vinylList, setVinylList] = useState([]);
  const [randomVinyl, setRandomVinyl] = useState([]);
  const [randomArtist, setRandomArtist] = useState([]);

  useEffect(() => {
    fetchRandomVinyls(4, setVinylList, navigate);
    fetchRandomVinyl(setRandomVinyl);
    fetchRandomArtist(setRandomArtist);
  }, []);

  return (
    <>
      {/* JUMBO */}
      <section
        id="jumbo"
        className="position-relative overflow-hidden text-white"
      >
        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="rem3 m-0">VynyleShop</h1>
          <hr className="my-2 w-70 w-md-40" />
          <p className="fs-4">
            Discover rare records, timeless classics, and hidden gems
          </p>
        </div>
      </section>

      {/* LAST CREATED 8 VYNILS */}
      <section id="news">
        <div className="container">
          <h2 className="text-center pt-4 pb-2">Greatest vinyls</h2>
          <VinylList vinylList={vinylList} />
        </div>
      </section>

      {/* VINYL RANDOM */}
      <h2 className="text-center mb-3 mt-5">Special vinyl</h2>
      <section id="vinyl-random" className="mb-5 pt-4 pb-5">
        <div className="container text-white d-flex flex-column justify-content-center">
          <img
            className="vinyl-image"
            src="/assets/img/Vinyl.png"
            alt="Vinyl image"
            draggable="false"
          />

          <h2 className="rem5 text-max-2-lines fw-semibold m-0">
            {randomVinyl.name}
          </h2>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <span className="rem4 fw-normal me-3">by</span>
              <h2 className="rem5 fw-semibold d-inline">
                {randomVinyl.artistName}
              </h2>
              <h2 className="rem3">Cover:</h2>
              <img
                src={
                  randomVinyl.images?.length > 0
                    ? randomVinyl.images[0]
                    : "/assets/img/Vinyl.png"
                }
                className="d-block w-100 w-md-50 px-2 vinyl-random-cover"
                alt="Vinyl Cover"
                draggable="false"
              />
            </div>
            <div className="col mt-2 mt-md-0 pt-md-4">
              <p className="fs-3 text-center text-md-start">
                Discover "{randomVinyl.name}", a {randomVinyl.genre} gem by{" "}
                <Link
                  to={"/artist/" + randomVinyl.artistId}
                  className="reset-a hover-underline fw-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  {randomVinyl.artistName}
                </Link>
                , released in {randomVinyl.releaseYear}. This{" "}
                {randomVinyl.format} LP edition includes{" "}
                {(randomVinyl.sideone?.length || 0) +
                  (randomVinyl.sidetwo?.length || 0)}{" "}
                tracks and was brought to life by {randomVinyl.label} in its{" "}
                {randomVinyl.edition} form.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <button
                  className="btn btn-primary btn-lg fs-3 px-4 py-3 mt-2 ms-1"
                  onClick={() => navigate("/vinyl/" + randomVinyl.id)}
                >
                  Discover vinyl
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIST RANDOM */}
      <h2 className="text-center mb-3 mt-5">Special artist</h2>
      <section id="artist-random" className="mb-5 py-5">
        <div className="container text-white d-flex flex-column justify-content-center">
          <img
            className="vinyl-image"
            src="/assets/img/Vinyl.png"
            alt="Vinyl image"
            draggable="false"
          />

          <div className="artist-card d-flex flex-column flex-lg-row align-items-center gap-4">
            <Link to={`/artist/${randomArtist.id}`} className="reset-a w-md-55">
              <img
                src={randomArtist.images?.[0] || "assets/img/Vinyl.png"} // Fallback image
                alt={`Foto di ${randomArtist.name}`}
                className="artist-photo bg-white img-fluid"
              />
            </Link>
            <div
              className={`artist-bio text-center text-md-start w-md-45 fs-4`}
            >
              <h4 className="rem5">{randomArtist.name}</h4>
              <p>{randomArtist.bio || "Biografia non disponibile."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRIP ADVISOR */}
      <section id="reviews" className="my-5">
        <div className="container">
          <h2 className="text-center pt-4 pb-2">What our customers say</h2>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {/* REVIEW 1 */}
            <div className="col">
              <TripAdvisorReview
                name="Maria Hill"
                time="1 week ago"
                stars={5}
                review="Absolutely love this vinyl shop! The collection is diverse and
                  the sound quality is top-notch. Shipping was fast and
                  everything arrived in perfect condition. Will definitely be
                  buying more!"
              />
            </div>
            {/* REVIEW 2 */}
            <div className="col">
              <TripAdvisorReview
                name="Jasper Cole"
                time="2 days ago"
                stars={4}
                review="Really happy with the quality of the new vinyls! Everything
                  was sealed and pristine. Only reason for 4 stars is I wish
                  there were more genre filters when browsing."
              />
            </div>
            {/* REVIEW 3 */}
            <div className="col">
              <TripAdvisorReview
                name="Luna McAllister"
                time="5 days ago"
                stars={5}
                review="This place is a treasure for vinyl lovers! The random vinyl
                  feature is such a cool touch — I discovered an artist I’d
                  never heard of and loved it!"
              />
            </div>
            {/* REVIEW 4 */}
            <div className="col">
              <TripAdvisorReview
                name="Callum Rivera"
                time="3 weeks ago"
                stars={5}
                review="The vinyls are brand new and sound amazing. Loved the clean
                  packaging and fast delivery."
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <a
            href="https://www.tripadvisor.com"
            className="reset-a btn btn-lg btn-primary text-white"
            target="_blank"
          >
            Write a review
          </a>
        </div>
      </section>
    </>
  );
}
