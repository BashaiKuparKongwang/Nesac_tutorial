import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { selectLocation } from './overlays/villageSlice'; // Import the selectLocation selector
import { selectDistanceValue } from './overlays/distanceSlice';
import { setStoreVillages } from './overlays/projectVillageSlice';


  const ProjectsVillage = () => {
    const dispatch = useDispatch();
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


    const handleFetchVillages = (ycoord, xcoord,dist) => {
        const url = `http://localhost/NerCensus/villageCensus_api.php?xcoord=${xcoord}&ycoord=${ycoord}&dist=${dist}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Data I have",data);
                setVillages(data);
                dispatch(setStoreVillages(data));
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
                        <ListGroup.Item>Distance: {distance}Km</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
                <Card.Body>
                <Card.Title th style={{ ...thTdStyle, ...thStyle }}>Villages in range</Card.Title>
                <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <table style={tableStyle}>
                      <thead>
                        <tr>
                          <th style={thTdStyle}>Villages</th>
                          <th style={thTdStyle}>Total Population</th>
                          <th style={thTdStyle}>Male Population</th>
                          <th style={thTdStyle}>Female Population</th>
                        </tr>
                      </thead>
                      <tbody>
                          {villages !== undefined &&
                            villages.map((village, index) => (
                              <tr key={index}>
                                <td style={thTdStyle}>{village.name}</td>
                                <td style={thTdStyle}>{village.tot_p}</td>
                                <td style={thTdStyle}>{village.tot_m}</td>
                                <td style={thTdStyle}>{village.tot_f}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectsVillage;
  

// if needed use inside the card constructor
    //     <Card.Body>
    //     <Card.Title th style={{ ...thTdStyle, ...thStyle }}>Population</Card.Title>
    //     <table style={tableStyle}>
    //       <thead>
    //         <tr>
    //           <th  colSpan="2">Total Population</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* <tr>
    //           <td style={thTdStyle} colSpan="2">{villages !== undefined && villages[0].tot_p}</td>
    //         </tr> */}
    //         <tr>
    //           <th style={thStyle}>Male</th>
    //           <th style={thStyle}>Female</th>
    //         </tr>
    //         <tr>
    //           <td style={thTdStyle}>{villages !== undefined && villages[0].tot_m}</td>
    //           <td style={thTdStyle}>{villages !== undefined && villages[0].tot_f}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //  </Card.Body>