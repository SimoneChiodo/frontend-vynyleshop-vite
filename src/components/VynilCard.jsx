export default function VynilCard({ vynil }) {
  return (
    <>
      <div key={vynil.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Vynil Cover"
          />
          <div className="card-body">
            <h5 className="card-title">{vynil.name}</h5>
            <p className="card-text">{vynil.artistName}</p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
