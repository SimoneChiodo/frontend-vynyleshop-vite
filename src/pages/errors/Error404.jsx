import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  // Force the URL to be /404
  useEffect(() => {
    // NOTE: The part { replace: true } avoid a redirect loop when going back to the previous page
    if (location.pathname !== "/404") navigate("/404", { replace: true });
  }, [location, navigate]);

  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="display-1">404</h1>
        <p className="lead fs-4">Page not found</p>

        <Link to="/" className="btn btn-primary fs-5">
          Back to Home
        </Link>
      </div>
    </>
  );
}
