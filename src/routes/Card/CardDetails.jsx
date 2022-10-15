import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MiniCard from "../../components/Card/MiniCard";
import Graph from "../../components/Graph/Graph";
import HourlyCard from "../../components/HourlyCard/HourlyCard";
import { CardsContext } from "../../context/CardsContext";
import { getForecastHourly } from "../../service";
import dayjs from "dayjs";
import "./CardDetails.css";
import MapView from "../../components/MapView/MapView";

const DetailsCard = () => {
  const { id } = useParams();
  const { cards } = useContext(CardsContext);
  const card = cards.filter((card) => card.id === Number(id))[0];
  const [hourlyList, setHourlyList] = useState([]);
  const [hourly, setHourly] = useState({});

  useEffect(() => {
    getForecastHourly(card.latitude, card.longitude)
      .then((res) => {
        const hourlyList = res.hourly.time.map((value, index) => {
          return {
            id: index,
            time: value,
            relativehumidity: res.hourly.relativehumidity_2m[index],
            temperature: res.hourly.temperature_2m[index],
            windspeed: res.hourly.windspeed_10m[index],
          };
        });

        hourlyList.splice(24);

        setHourlyList(hourlyList);

        res.hourly.time.splice(24);
        res.hourly.temperature_2m.splice(24);
        // res.hourly.relativehumidity_2m.splice(24);
        // res.hourly.windspeed_10m.splice(24);

        const time = res.hourly.time.map((value) =>
          dayjs(value).format("HH:mm")
        );

        setHourly({
          time: time,
          temperature: res.hourly.temperature_2m,
          // relativehumidity: res.hourly.relativehumidity_2m,
          // windspeed: res.hourly.windspeed_10m,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid text-white">
      <div className="row">
        <div className="col-4 hourly-aside">
          <h2 className="m-3 text-center">Condición actual</h2>
          {hourlyList.map((hourly) => (
            <HourlyCard key={hourly.id} hourly={hourly} />
          ))}
        </div>
        <div className="col-8 main">
          <div className="row mt-4">
            <div className="col-lg-4">
              <MiniCard card={card} />
            </div>
            <div className="col-lg-8 ms-3 ms-lg-0 mt-4 mt-lg-0 align-self-center">
              <Graph hourly={hourly} />
            </div>
            <div className="col mt-4 mx-3 map">
              <MapView position={[card.latitude, card.longitude]} ubication={card.ubication} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
