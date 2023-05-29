import React from "react";
import Header from "../Header";
import ProjectsMap from "../ProjectsMap";
import ProjectsInfo from "../../components/Tools/ProjectsInfo";
import ProjectsVillage from "../ProjectsVillage";
import '../Css/wrapper.css';

const ProjectsWrapper = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col" style={{ height: "60vh", overflow: "auto", marginBottom: "20px" }}>
                <ProjectsMap />
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ height: "50vh", overflow: "auto", marginBottom: "20px" }}>
                <ProjectsInfo />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <ProjectsVillage />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectsWrapper;
