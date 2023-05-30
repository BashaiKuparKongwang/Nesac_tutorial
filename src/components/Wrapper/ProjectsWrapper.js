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
      <div className="full-screen-container">
        <div className="row full-height">
          <div className="col-md-9">
            <div className="row">
              <div className="col full-height" style={{ marginBottom: "20px", marginLeft: "20px" }}>
                <ProjectsMap />
              </div>
            </div>
            <div className="row">
              <div className="col full-height" style={{ marginBottom: "20px", marginLeft: "20px"}}>
                <ProjectsInfo />
              </div>
            </div>
          </div>
          <div className="col-md-3 full-height">
            <ProjectsVillage />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectsWrapper;
