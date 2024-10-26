import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <h2>Error 404: Not found</h2>
      <p>Please visit the link below to be redirected:</p>
      <Link to="/">
        <button>Return To SwiftTrim</button>
      </Link>
    </>
  );
}
