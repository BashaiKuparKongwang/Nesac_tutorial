import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import '../index.css'; 
import * as L from "leaflet";
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.js';
import { setLocation } from './overlays/villageSlice';
import { selectDistanceValue } from './overlays/distanceSlice';

const ProjectsMap = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const distance = useSelector(selectDistanceValue);

  const handleMarkerClick = (event, location) => {
    setSelectedLocation(location);
    dispatch(setLocation(location)); // Dispatch the setLocation action with the location data
    console.log("Data", location);

    const { latitude, longitude } = location;
    const map = event.target._map;
    map.setView([latitude, longitude], 10); 
    map.flyTo([latitude, longitude], 10);
  };

  const filteredData = useSelector(state => state.data.filter(item => item.district === "West Garo Hills"));

  return (
    <MapContainer center={[24.33464991442811, 90.4229736328125]} zoom={7.3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredData.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={L.AwesomeMarkers.icon({ icon: 'location-arrow', prefix: 'fa', markerColor: 'red' })}
          eventHandlers={{
            click: (event) => handleMarkerClick(event, location)
          }}
        >
          <Popup >
            <h3>{location.state}</h3>
            <p>Sector: {location.sector1}</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </Popup>
          {selectedLocation && selectedLocation.id === location.id && (
            <Circle
              center={[location.latitude, location.longitude]}
              radius={distance * 1000} // Assuming distance is in kilometers, convert it to meters
              pathOptions={{ color: 'blue' }} // Customize the circle color
            />
          )}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ProjectsMap;
