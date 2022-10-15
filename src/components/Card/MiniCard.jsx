import React from "react";
import { BsFillGeoAltFill, BsThermometerHalf, BsWind } from "react-icons/bs";
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import noImg from "../../assets/no-image.svg";
import "./MiniCard.css";

const MiniCard = ({ card }) => {
  const {
    id,
    ubication,
    temperature,
    latitude,
    longitude,
    windspeed,
    image,
    date,
  } = card;

  dayjs.locale("es");

  return (
    <div className="details-card background ms-3 px-3">
      <h5 className="my-4">
        <BsFillGeoAltFill className="me-2" />
        {ubication}
      </h5>
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid"
            src={image ? image : noImg}
            alt={ubication}
          />
        </div>
        <div className="col-6 d-none d-lg-block">
          <h4 className="temperature">
            <BsThermometerHalf />
            {temperature} °C
          </h4>
          <p>{dayjs(date).format("dddd, D MMMM, HH:mm")}</p>
        </div>
        <div className="col-6 row d-lg-none">
          <div className="col-12">
            <h4 className="temperature">
              <BsThermometerHalf />
              {temperature} °C
            </h4>
            <p>{dayjs(date).format("dddd, D MMMM, HH:mm")}</p>
          </div>
          <div className="col-6 border-end text-center align-self-center">
            <p>Latitud</p>
            <p>{latitude}</p>
          </div>
          <div className="col-6 text-center align-self-center">
            <p>Longitud</p>
            <p>{longitude}</p>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <div className="row coordinates mt-4 text-center">
          <div className="col-6 border-end">
            <span>Latitud</span>
            <span>{latitude}</span>
          </div>
          <div className="col-6">
            <span>Longitud</span>
            <span>{longitude}</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 windspeed">
        <BsWind className="me-2" />
        {windspeed} Km/h
      </p>
    </div>
  );
};

export default MiniCard;
