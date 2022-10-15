import React from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = ({ cards }) => {
  return (
    <div className="row gy-5">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
