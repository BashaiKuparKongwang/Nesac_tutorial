import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { selectLocation } from './overlays/villageSlice'; // Import the selectLocation selector
import { selectDistanceValue } from './overlays/distanceSlice';

const ProjectsVillage = () => {
  const villageData = useSelector(selectLocation); // Retrieve the village data from the store using selectLocation selector
  const distance = useSelector(selectDistanceValue);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Village Data</Card.Title>
          {villageData && (
            <ListGroup variant="flush">
              <ListGroup.Item>Latitude: {villageData.latitude}</ListGroup.Item>
              <ListGroup.Item>Longitude: {villageData.longitude}</ListGroup.Item>
            </ListGroup>
          )}
        </Card.Body>
        <Card.Body>
          <Card.Title>Village Distance</Card.Title>
          
            <ListGroup variant="flush">
              <ListGroup.Item>Distance:{ distance}</ListGroup.Item>
              
            </ListGroup>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectsVillage;
