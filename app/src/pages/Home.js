import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>Lawn Services in Gwinnett County</h2>
      <div>
        <h1>SwiftTrim</h1>
        <ul>
          <li>
            <i className="fa fa-phone"> (770) 676-2846</i> {/* Phone Icon */}
          </li>
          <li>
            <i className="fa fa-envelope"> info@swifttrimga.com</i>
            {/* Envelope Icon */}
          </li>
        </ul>
      </div>
      <div>
        <p>
          Serving Gwinnett county and surrounding areas. We specialize in
          keeping your outdoor spaces lush, healthy, and beautifully manicured
          year-round. Whether you need routine mowing, seasonal cleanup, gutter
          cleaning, or pressure washing, our expert team ensures every blade of
          grass is given the attention it deserves.
        </p>
      </div>
      <Link to="/services">
        <button>Check Out Our Services</button>
      </Link>
    </>
  );
}
