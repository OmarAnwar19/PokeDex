import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <p>404 - no results found...</p>
      <br />
      <Link className="button" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default Missing;
