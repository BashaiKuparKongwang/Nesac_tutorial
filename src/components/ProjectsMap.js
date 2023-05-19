import React from "react";
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map = () => {

  return (
    <MapContainer center={[26, 91]} zoom={7.3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
