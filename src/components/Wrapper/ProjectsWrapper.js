import React from "react";
import ProjectsMap from "../ProjectsMap";
import ProjectsTool from "../../components/Tools/ProjectsTool";


const HomeWrapper = () => {
    return (
        <React.Fragment>
        <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ProjectsMap />
                    </div>
                    <div className="col-md-6">
                        <ProjectsTool />
                    </div>
                </div>
            </div>        
        </React.Fragment>
    )
}
export default HomeWrapper;