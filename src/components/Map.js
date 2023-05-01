import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map = () => {

  return (
    <MapContainer center={[26 ,91]} zoom={7.3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <WMSTileLayer
        url="http://localhost:8080/geoserver/ne/wms"
        layers="meghalaya_district"
        format="image/png"
        transparent={true}
        opacity={0.6}
        color="red"
      />
    </MapContainer>
  );
};

export default Map;

console.log("WMSTileLayer url: ", <WMSTileLayer url="http://localhost:8080/geoserver/ne/wms" />); // log the url prop
console.log("WMSTileLayer layers: ", <WMSTileLayer layers="ne%3Ameghalaya_district" />); // log the layers prop
console.log("WMSTileLayer format: ", <WMSTileLayer format="image/png" />); // log the format prop
console.log("WMSTileLayer opacity: ", <WMSTileLayer opacity={5} />); // log the opacity prop