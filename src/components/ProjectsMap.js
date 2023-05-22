import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import '../index.css'; 
import * as L from "leaflet";
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.js';
import ProjectsModal from './Modal/projectsModal';

const ProjectsMap = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (event, location) => {
    setSelectedLocation(location);
    console.log("Data", location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  const filteredData = useSelector(state => state.data.filter(item => item.district === 'West Garo Hills'));

  return (
    <MapContainer center={[26, 91]} zoom={7.3} scrollWheelZoom={true}>

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
          <Popup>
            <h3>{location.state}</h3>
            <p>Sector: {location.sector1}</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </Popup>
        </Marker>
      ))}

      {/* Modal */}
      {selectedLocation && (
        <ProjectsModal
          isOpen={true}
          location={selectedLocation}
          onClose={handleCloseModal}
        />
      )}
    </MapContainer>
  );
};

export default ProjectsMap;