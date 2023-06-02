import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDistance } from '../overlays/distanceSlice';
import { setPolyDistance} from '../overlays/polyDistanceSlice';
import '../Css/distances.css'

const ProjectsInfo = () => {
  const distance = useSelector(state => state.distance);
  const polyDistance = useSelector(state => state.polyDistance);
  const filteredData = useSelector(state => state.data.filter(item => item.uid === 705));
  const dispatch = useDispatch();

  const handleDistanceChange = async(event) => {
   await dispatch(setDistance(event.target.value));
  };

  const handlePolyDistanceChange = async(event) => {
    await dispatch(setPolyDistance(event.target.value));
   };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px',
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
    <div>
      <h2 style={{ marginTop: '20px' }}>Projects Information</h2>
      <div class="container">
        <div> 
          <label htmlFor="distance">Distance:</label>
          <select id="distance" value={distance} onChange={handleDistanceChange}>
            <option value="5">5km</option>
            <option value="10">10km</option>
            <option value="15">15km</option>
          </select>
        </div>
        <div>
          <label htmlFor="polyDistance">PolyDistance:</label>
          <select id="polyDistance" value={polyDistance} onChange={handlePolyDistanceChange}>
              <option value="5">5km</option>
              <option value="10">10km</option>
              <option value="15">15km</option>
              <option value="20">Max</option>

          </select>
        </div>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Property</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            Object.entries(item).map(([key, value]) => (
              <tr key={key}>
                <td style={thTdStyle}>{key}</td>
                <td style={thTdStyle}>{value}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsInfo;