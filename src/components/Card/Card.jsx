import React from "react";
import { useContext } from "react";
import {
  BsXLg,
  BsGeoAltFill,
  BsThermometerHalf,
  BsWind,
} from "react-icons/bs";
import { CardsContext } from "../../context/CardsContext";
import noImg from "../../assets/no-image.svg";
import "./Card.css";

const Card = ({ card }) => {
  const { cards, setCards } = useContext(CardsContext);
  const { id, ubication, temperature, latitude, longitude, windspeed, image } =
    card;

  const handleDelete = () => {
    setCards(cards.filter((card) => card.id !== id));
    localStorage.removeItem(id);
  };
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card m-auto">
        <div className="d-flex justify-content-between">
          <h5 className="text-start m-3">
            <BsGeoAltFill className="me-2 icon" />
            {ubication}
          </h5>
          <button className="btn me-3" onClick={handleDelete}>
            <BsXLg className="icon" />
          </button>
        </div>
        <img className="card-img m-auto" src={image ? image : noImg} alt={ubication} />
        <div className="card-body text-center">
          <h4>
            <BsThermometerHalf />
            {temperature}
          </h4>
          <div className="row coordinates my-4">
            <div className="col-6 border-end">
              <span>Latitud</span>
              <span>{latitude}</span>
            </div>
            <div className="col-6">
              <span>Longitud</span>
              <span>{longitude}</span>
            </div>
          </div>
          <p>
            <BsWind className="me-2" />
            {windspeed} Km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
