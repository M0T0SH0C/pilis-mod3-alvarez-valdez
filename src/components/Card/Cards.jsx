import React from "react";
import Card from "./Card";
import "./Cards.css";

const cards = [
  {
    id: 1,
    ubication: "Ciudad Cultural",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
  },
  {
    id: 2,
    ubication: "Ciudad de Nieva",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
  },
  {
    id: 3,
    ubication: "Barrio Norte",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
  },
];

// TODO: pasar props (cards)
const Cards = () => {
  console.log(cards);
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          ubication={card.ubication}
          temperature={card.temperature}
          latitude={card.latitude}
          longitude={card.longitude}
        />
      ))}
    </div>
  );
};

export default Cards;
