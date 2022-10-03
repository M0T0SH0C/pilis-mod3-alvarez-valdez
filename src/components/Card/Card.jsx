import React from "react";
import "./Card.css";

const Card = ({ ubication, temperature, latitude, longitude }) => {
  return (
    <div className="card">
      <p>{ubication}</p>
      <p>Temperatura: {temperature}</p>
      <p>Latitud: {latitude}</p>
      <p>Longitud: {longitude}</p>
    </div>
  );
};

export default Card;
