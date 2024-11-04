import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>Lawn Services in Gwinnett County</h2>
      <p>
        Serving Gwinnett county and surrounding areas. We specialize in keeping
        your outdoor spaces lush, healthy, and beautifully manicured year-round.
        Whether you need routine mowing, seasonal cleanup, gutter cleaning, or
        pressure washing, our expert team ensures every blade of grass is given
        the attention it deserves.
      </p>
      <Link to="/services">
        <button>Check Out Our Services</button>
      </Link>
    </>
  );
}
