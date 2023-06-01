import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import '../index.css'; 
import * as L from "leaflet";
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.js';
import { setLocation } from './overlays/villageSlice';
import { selectDistanceValue } from './overlays/distanceSlice';
import { selectVillages } from './overlays/projectVillageSlice';

const ProjectsMap = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState(null);
  // const [polygonData, setPolygonData] = useState(null);
  const distance = useSelector(selectDistanceValue);
  const villages = useSelector(selectVillages);

  console.log("Villages::", typeof villages);
  // console.log("Road Polygon::", polygonData);

  const handleMarkerClick = (event, location) => {
    setSelectedLocation(location);
    console.log("Location::", location);
    dispatch(setLocation(location));
    console.log("Data", location);

    const { latitude, longitude } = location;
    const map = event.target._map;
    map.setView([latitude, longitude], 10); 
    map.flyTo([latitude, longitude], 10);
  };

  // const handleSubMarkerClick = (event, villages) => {

  //   console.log("HandleMarkerClick Villages", villages);

  //   // const { ycoord, xcoord } = villages;
  //   // const map = event.target._map;
  //   // map.setView([ycoord, xcoord], 10); 
  //   // map.flyTo([ycoord, xcoord], 10);
  // };

  const handleSubMarkerMouseOver = (event, village) => {
    // Show the popup
    event.target.openPopup();
  };
  
  const handleSubMarkerMouseOut = (event) => {
    // Close the popup
    event.target.closePopup();
  };

  const filteredData = useSelector(state => state.data.filter(item => item.uid === 222));

  const renderSubmarkers = villages && villages.length > 0 && (
    villages.map((village) => (
      <Marker
        key={village.id}
        position={[parseFloat(village.ycoord), parseFloat(village.xcoord)]}
        icon={L.AwesomeMarkers.icon({
          icon: 'location-arrow',
          prefix: 'fa',
          markerColor: 'green',
        })}
        eventHandlers={{
          mouseover: (event) => handleSubMarkerMouseOver(event, village),
          mouseout: handleSubMarkerMouseOut,
        }}
      >
        <Popup className="submarker-popup" closeButton={false}>
          <div className="submarker-popup-container">
            <h3 className="submarker-popup-title">{village.name}</h3>
          </div>
        </Popup>
      </Marker>
    ))
  );
  console.log("RenderSubMarkers::", renderSubmarkers);
      
  const [polygonData, setPolygonData] = useState(null);

  useEffect(() => {
    fetch('http://localhost/NerCensus/villageCensus_api.php?requestType=road')
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data); // Log the API response
        if (Array.isArray(data) && data.length > 0) {
          const parsedData = JSON.parse(data[0].geom);
          if (parsedData && parsedData.type === 'LineString' && parsedData.coordinates && parsedData.coordinates.length > 0) {
            setPolygonData(parsedData.coordinates);
            console.log("Set Polygon Data:", parsedData.coordinates);
          } else {
            console.log("Invalid data format:", parsedData);
          }
        } else {
          console.log("Empty data array");
        }
      })
      .catch((error) => console.error('Error fetching polygon data:', error));
  }, []);

  useEffect(() => {
    console.log("Road Data::", polygonData);
  }, [polygonData]);

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
          <Popup>
            <h3>{location.state}</h3>
            <p>Sector: {location.sector1}</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </Popup>
          {selectedLocation && selectedLocation.id === location.id && (
            <Circle
              center={[location.latitude, location.longitude]}
              radius={distance * 1000}
              pathOptions={{ color: 'blue' }}
            />
          )}
        </Marker>
      ))}
      {renderSubmarkers}
      {polygonData && (
        <Polyline
          positions={polygonData.map(coords => L.latLng(coords[1], coords[0]))}
          pathOptions={{ color: 'purple' }}
        />
)}
    </MapContainer>
  );
};

export default ProjectsMap;
