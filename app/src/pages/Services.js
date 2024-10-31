import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [cardset1, setCards1] = useState([]);
  const [cardset2, setCards2] = useState([]);

  useEffect(() => {
    // Fetch data from the local JSON file
    fetch("../BasicServices.json")
      .then((response) => response.json())
      .then((data) => setCards1(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Fetch data from the local JSON file
    fetch("../OtherServices.json")
      .then((response) => response.json())
      .then((data) => setCards2(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h2>Services</h2>
      <div className="card-container">
        <h2>Regular Weekly or Bi-weekly Bundled Services</h2>
        {cardset1.map((card) => (
          <ServiceCard
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
        <Link to="/quote">
          <button>Request Quote</button>
        </Link>
        <h2>Additonal Services At Your Request</h2>

        {cardset2.map((card) => (
          <ServiceCard
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
        <Link to="/quote">
          <button>Request Quote</button>
        </Link>
      </div>
    </>
  );
};

export default Services;
