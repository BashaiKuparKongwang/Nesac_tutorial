import React from "react";
import { MapContainer, TileLayer, useMapEvents, WMSTileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import { useDispatch } from 'react-redux';
import { setClickedPoint } from './action';


const Map = () => {
  const dispatch = useDispatch();

  function HandleClick()  {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        console.log('Clicked!!', lat, lng);
        dispatch(setClickedPoint({lat, lng}));
      },
    });
    return null;
  }

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
    <HandleClick/>
    </MapContainer>
  );
};

export default Map;