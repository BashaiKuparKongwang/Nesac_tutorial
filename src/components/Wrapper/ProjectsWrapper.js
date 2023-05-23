import React from "react";
import Header from "../Header";
import ProjectsMap from "../ProjectsMap";
import ProjectsInfo from "../../components/Tools/ProjectsInfo";


const ProjectsWrapper = () => {
    return (
        <React.Fragment>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-md-10" style={{ height: "50vh", overflow: "auto" }}>
                            <ProjectsMap />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" style={{ height: "50vh", overflow: "auto" }}>
                            <ProjectsInfo />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                <h2>Village</h2>
                </div>
            </div>
        </div>      
        </React.Fragment>
    )
}
export default ProjectsWrapper;