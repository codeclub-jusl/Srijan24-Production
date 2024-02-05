"use client";
import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
 return (
    <div className="wrapper-container">
      <div className="wrapper">
        <div className="card">
          <h3 className="card-title">Campus Ambassador</h3>
        </div>
        <div className="card">
          <h3 className="card-title">Events</h3>
        </div>
        <div className="card">
          <h3 className="card-title">Merchandise</h3>
        </div>
        <div className="card">
          <h3 className="card-title">Workshops</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
