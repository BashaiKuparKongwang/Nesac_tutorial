import React from 'react';
import { useSelector } from 'react-redux';

const InfoBox = () => {
  const selectedDistricts = useSelector(state => state.selectedDistricts);

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
    </div>
  );
};

export default InfoBox;
