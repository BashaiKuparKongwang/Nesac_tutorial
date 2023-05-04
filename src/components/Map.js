import React from "react";
import { MapContainer, TileLayer, WMSTileLayer, useMapEvents, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useDispatch } from 'react-redux';
import { setClickedPoint } from './action';
import { layers } from "./Config";

const Map = () => {
  const dispatch = useDispatch();

  function HandleClick() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        console.log('Clicked!!', lat, lng);
        dispatch(setClickedPoint({ lat, lng }));
      },
    });
    return null;
  }

  return (
    <MapContainer center={[26, 91]} zoom={7.3} scrollWheelZoom={true}>
      <LayersControl position="topright">
        {layers.map((layer) =>
          <LayersControl.Overlay
            key={layer.id}
            name={layer.text}
            checked={layer.show}
          >
            <WMSTileLayer
              url={layer.link}
              layers={layer.layer}
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>
        )}
      </LayersControl>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <HandleClick />
    </MapContainer>
  );
};


export default Map;
