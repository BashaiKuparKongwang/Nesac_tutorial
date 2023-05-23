import React from 'react';

const ProjectsInfo = ({ location }) => {
  console.log("Data from ProjectsInfo", location);
  
  return (
    <div>
      <h2>Project Information</h2>
      {location ? (
        <div> 
          <h2>{location.state}</h2>
          {Object.entries(location).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      ) : (
        <p>No location data available</p>
      )}
    </div>
  );
};

export default ProjectsInfo;
