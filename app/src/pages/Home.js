import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-body">
        <div className="home-header">
          <h2>Lawn Services in Gwinnett County</h2>
        </div>
        <p>
          Serving Gwinnett county and surrounding areas. We specialize in
          keeping your outdoor spaces lush, healthy, and beautifully manicured
          year-round. Whether you need routine mowing, seasonal cleanup, gutter
          cleaning, or pressure washing, our expert team ensures every blade of
          grass is given the attention it deserves.
        </p>
        <div className="home-image">
          <img src="../Mowing.png"></img>
        </div>
        <Link to="/services">
          <button className="services-button">Check Out Our Services</button>
        </Link>
      </div>
    </>
  );
}
