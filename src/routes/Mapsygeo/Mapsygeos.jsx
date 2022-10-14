import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerIcon from "../../assets/punto.png";
import { useEffect, useRef } from "react";
import "./Mapsygeos.css";

const icon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [40, 45],
});

const MapasOnline = () => {
  const position = [-24.1835319, -65.3082022];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100vw", height: "50vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
};

// Te dejo codigo de un relojo por si queres agregarlo //

/*function reloj() {
  const h1 = useRef();
  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ti()}`;
    }, 1000);
    console.log("asd");
    return () => clearInterval(cl);
  }, []);
  console.log("asdsss");
  return (
    <div className="reloj">
      <h1 ref={h1}>{ti()}</h1>
      <h2>HORA ACTUAL DE TU PROVINCIA</h2>
    </div>
  );
}*/

export default MapasOnline;
