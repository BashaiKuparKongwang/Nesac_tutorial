import React from "react";
import Header from "../Header";
import ProjectsMap from "../ProjectsMap";
import ProjectsTool from "../../components/Tools/ProjectsTool";


const ProjectsWrapper = () => {
    return (
        <React.Fragment>
        <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <ProjectsMap />
                    </div>
                    <div className="col-md-2">
                        <ProjectsTool />
                    </div>
                </div>
            </div>        
        </React.Fragment>
    )
}
export default ProjectsWrapper;