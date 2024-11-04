import { Link } from "react-router-dom";
import "./NoPage.css";

export default function NoPage() {
  return (
    <>
      <div className="nopage-body">
        <div className="nopage-header">
          <h2>Error 404: Not found</h2>
        </div>
        <p>Please visit the link below to be redirected:</p>
        <Link to="/">
          <button>Return To SwiftTrim</button>
        </Link>
      </div>
    </>
  );
}
