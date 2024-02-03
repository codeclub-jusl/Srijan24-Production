"use client";
import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (card) => {
    setActiveCard(card);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="wrapper-container">
      <div className="wrapper">
        <div
          className={`card ${activeCard === 1 ? "active" : ""}`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <h3 className="card-title">Campus Ambassador</h3>
        </div>
        <div
          className={`card ${activeCard === 2 ? "active" : ""}`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={handleCardLeave}
        >
          <h3 className="card-title">Events</h3>
        </div>
        <div
          className={`card ${activeCard === 3 ? "active" : ""}`}
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={handleCardLeave}
        >
          <h3 className="card-title">Merchandise</h3>
        </div>
        <div
          className={`card ${activeCard === 4 ? "active" : ""}`}
          onMouseEnter={() => handleCardHover(4)}
          onMouseLeave={handleCardLeave}
        >
          <h3 className="card-title">Workshops</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
