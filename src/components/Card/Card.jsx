import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsXLg, BsGeoAltFill, BsThermometerHalf, BsWind } from "react-icons/bs";
import Swal from "sweetalert2";
import { CardsContext } from "../../context/CardsContext";
import noImg from "../../assets/no-image.svg";
import "./Card.css";
import { UserContext } from "../../context/UserContext";

const Card = ({ card }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cards, setCards } = useContext(CardsContext);
  const { id, ubication, temperature, latitude, longitude, windspeed, image } =
    card;

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleDelete = () => {
    console.log(currentUser);
    if (currentUser) {
      setCards(cards.filter((card) => card.id !== id));
    } else {
      Swal.fire({
        icon: "error",
        title: "No has iniciado sesión!",
        text: "Para borrar una tarjeta debes iniciar sesión",
        confirmButtonColor: "#356BB1",
      });
    }
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card m-auto see-card">
        <div className="d-flex justify-content-between">
          <h5 className="text-start m-3">
            <BsGeoAltFill className="me-2 icon" />
            {ubication}
          </h5>
          <button className="btn me-3" onClick={handleDelete}>
            <BsXLg className="icon" />
          </button>
        </div>
        <img
          className="card-img m-auto"
          src={image ? image : noImg}
          alt={ubication}
        />
        <div className="card-body text-center">
          <h4>
            <BsThermometerHalf />
            {temperature} °C
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
          <Link className="stretched-link" to={`/card/${id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
