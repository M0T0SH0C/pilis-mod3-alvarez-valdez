import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapView.css";
import MarkerIcon from "../../assets/marker.png";

const icon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [30, 50],
});

const MapView = ({ position, ubication }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup className="ubication">{ubication}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
