import React from "react";
import { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { CardsContext } from "../../context/CardsContext";
import "./Card.css";

const Card = ({ card }) => {
  const { cards, setCards } = useContext(CardsContext);
  const { id, ubication, temperature, latitude, longitude, img } = card;

  const handleDelete = () => {
    setCards(cards.filter((card) => card.id !== id));
    localStorage.removeItem(id);
  };

  return (
    <div className="card">
      <div className="btn" onClick={handleDelete}>
        <FaRegTimesCircle />
      </div>
      <h2>{ubication}</h2>
      <p>{temperature}</p>
      <p>Latitud: {latitude}</p>
      <p>Longitud: {longitude}</p>
      <img src={img} alt={ubication} />
    </div>
  );
};

export default Card;
