import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const selectedLayers = useSelector(state => state.layer);
  console.log("selectedLayers:", selectedLayers); // Add this console log

  return (
    <MapContainer center={[26, 91]} zoom={7.3} scrollWheelZoom={true}>
      
      {selectedLayers.map((layer) =>
        layer.show && (
          <WMSTileLayer
            key={layer.id}
            url={layer.link}
            layers={layer.layer}
            format="image/png"
            transparent={true}
          />
        )
      )}


      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
