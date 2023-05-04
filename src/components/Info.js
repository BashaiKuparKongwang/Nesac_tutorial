import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeClickedPoint } from './action';

const InfoBox = () => {
  const selectedDistricts = useSelector(state => state.selectedDistricts);
  const clickedPoints = useSelector(state => state.clickedPoints);
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
    </div>
  );
};

export default InfoBox;
