import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerIcon from "../../assets/punto.png";

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
      style={{ width: "100vw", height: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
};
export default MapasOnline;
