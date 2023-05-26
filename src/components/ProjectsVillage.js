import React,{useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { selectLocation } from './overlays/villageSlice'; // Import the selectLocation selector
import { selectDistanceValue } from './overlays/distanceSlice';

  const ProjectsVillage = () => {

    const tableStyle = {
      borderCollapse: 'collapse',
      width: '100%',
    };

    const thTdStyle = {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    };

    const thStyle = {
      backgroundColor: '#f2f2f2',
    };


    const [villages,setVillages] = useState();
    const villageData = useSelector(selectLocation); // Retrieve the village data from the store using selectLocation selector
    const distance = useSelector(selectDistanceValue);

    console.log("vills: ",villageData);
    console.log("distance: ",distance);
    console.log("Villages from Api: ", villages)


    const handleFetchVillages = (lat, lon,dist) => {
        const url = `http://localhost/myapi/village_api.php?lat=${lat}&lon=${lon}&dist=${dist}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Data I have",data);
                setVillages(data);
            })
            .catch((error) => {
                console.log('Error ohh:', error);
            });
    };

    useEffect(() => {
       villageData!==null && handleFetchVillages(villageData.latitude,villageData.longitude,distance)
      }, [distance,villageData]);

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title th style={{ ...thTdStyle, ...thStyle }}>Village Data</Card.Title>
                    {villageData && (
                        <ListGroup variant="flush">
                            <ListGroup.Item>Latitude: {villageData.latitude}</ListGroup.Item>
                            <ListGroup.Item>Longitude: {villageData.longitude}</ListGroup.Item>
                        </ListGroup>
                    )}
                </Card.Body>
                <Card.Body>
                    <Card.Title th style={{ ...thTdStyle, ...thStyle }}>Village Distance</Card.Title>

                    <ListGroup variant="flush">
                        <ListGroup.Item>Distance:{distance}</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
                <Card.Body style={{ maxHeight: '500px', overflowY: 'scroll'}}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <Card.Title th style={{ ...thTdStyle, ...thStyle }}>Village Distance</Card.Title>
                      </tr>
                    </thead>
                    <tbody>
                      <ul>
                        {villages !== undefined && villages.map((village, index) => (
                            <li style={thTdStyle} key={index}>{village.name}</li>
                        ))}
                      </ul>
                    </tbody>
                </table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectsVillage;