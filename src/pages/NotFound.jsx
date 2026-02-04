import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div style={{ padding: "20px" }}>
      <h2>404 Page Not Found</h2>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
