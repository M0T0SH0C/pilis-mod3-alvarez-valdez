import React from "react";
import { BsClock, BsThermometerHalf, BsWind, BsDroplet } from "react-icons/bs";
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import "./HourlyCard.css";

const HourlyCard = ({ hourly }) => {
  const { time, relativehumidity, temperature, windspeed } = hourly;

  const date = dayjs(time).format("HH:mm");

  return (
    <div className="m-3 row p-2 text-center hourly-item">
      <div className="col-6 col-lg-3">
        <BsClock className="me-2 icon" />
        {date}
      </div>
      <div className="col-6 col-lg-3">
        <BsDroplet className="me-2 icon" />
        {relativehumidity} %
      </div>
      <div className="col-6 col-lg-3 mt-2 mt-lg-0">
        <BsThermometerHalf className="me-2 icon" />
        {temperature} °C
      </div>
      <div className="col-6 col-lg-3 mt-2 mt-lg-0">
        <BsWind className="me-2 icon" />
        {windspeed} km/h
      </div>
    </div>
  );
};

export default HourlyCard;
