import React from "react";
import { useSelector } from "react-redux";
import { selectLayerDataSet } from "./overlays/dataSlice";
import "../components/Css/projects.css";
const Projects = () => {
  const data = useSelector(selectLayerDataSet);

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <table className="projects-table">
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project) => (
            <tr key={project.uid}>
              <td>{project.uid}</td>
              <td>{project.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
