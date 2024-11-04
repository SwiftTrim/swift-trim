import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import "./Services.css";

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
      <div className="services-body">
        <div className="services-header">
          <h2>Services</h2>
        </div>
        <div className="card-container">
          <h2>Regular Weekly or Bi-weekly Bundled Services</h2>
          <div className="service-cards-body">
            {cardset1.map((card, index) => (
              <ServiceCard
                key={card.id || index} // Use card.id if available; otherwise fallback to index
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>

          <Link to="/quote">
            <button>Request Quote</button>
          </Link>
          <h2>Additional Services At Your Request</h2>
          {cardset2.map((card, index) => (
            <ServiceCard
              key={card.id || index} // Use card.id if available; otherwise fallback to index
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
          <Link to="/quote">
            <button>Request Quote</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
