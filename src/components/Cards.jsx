"use client";
import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };


  return (
    <div className="wrapper-container">
    <div className="wrapper">
      <div className={`card ${activeCard === 1 ? "active" : ""}`} onClick={() => handleCardClick(1)}>
        <h3 className="card-title">Campus Ambassador</h3>
      </div>
      <div className={`card ${activeCard === 2 ? "active" : ""}`} onClick={() => handleCardClick(2)}>
        <h3 className="card-title">Events</h3>
      </div>
      <div className={`card ${activeCard === 3 ? "active" : ""}`} onClick={() => handleCardClick(3)}>
        <h3 className="card-title">Merchandise</h3>
      </div>
      <div className={`card ${activeCard === 4 ? "active" : ""}`} onClick={() => handleCardClick(4)}>
        <h3 className="card-title">Workshops</h3>
      </div>
    </div>
    </div>
  );
};

export default Cards;
