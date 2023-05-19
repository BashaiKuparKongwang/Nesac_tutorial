import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeClickedPoint } from './action';

const InfoBox = () => {
  const selectedDistricts = useSelector(state => state.rootReducer.selectedDistricts);
  const clickedPoints = useSelector(state => state.rootReducer.clickedPoints);
  const [villages, setVillages] =useState()
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

  const handleRemoveClickedPoint = (index) => {
    console.log('Test', index)
    dispatch(removeClickedPoint(index));
  }
  const handleFetchVillages = (lat, lon) => {
    const url = `http://localhost/myapi/village_api.php?lat=${lat}&lon=${lon}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVillages(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    if (clickedPoints.length > 0) {
      const lastClickedPoint = clickedPoints[clickedPoints.length - 1];
      const lat = lastClickedPoint.lat;
      const lon = lastClickedPoint.lng;

      handleFetchVillages(lat, lon);
    }
  }, [clickedPoints]);

  return (
    <div className="info-box">
      <h2>Info Box</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Districts</th>
          </tr>
        </thead>
        <tbody>
          {selectedDistricts.map((district, index) => (
            <tr key={index}>
              <td style={{...thTdStyle, liststyle: 'circle inside'}}>{district}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Clicked Points</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clickedPoints.map((clickedPoint, index) => (
            <tr key={index}>
              <td style={{...thTdStyle}}>
                {`Latitude: ${clickedPoint.lat}, Longitude: ${clickedPoint.lng}`}
              </td>
              <td style={{...thTdStyle}}>
                <button onClick={() => handleRemoveClickedPoint(index)}>Remove</button>
              </td>
            </tr>
          ))}
          {clickedPoints.length === 0 && (
            <tr>
              <td style={{...thTdStyle}}>No clicked points</td>
              <td style={{...thTdStyle}}></td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Villages</h2>
      <ul>
        {villages!=undefined&&villages.map((village, index) => (
          <li key={index}>{village.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBox;
