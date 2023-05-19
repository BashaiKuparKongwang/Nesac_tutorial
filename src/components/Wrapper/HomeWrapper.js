import React from "react";
import Header from "../Header";
import LayerTree from "../LayerTree";
import Map from "../Map";
import Info from "../Info";

const HomeWrapper = () => {
    return (
        <React.Fragment>
        <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <LayerTree />
                    </div>
                    <div className="col-md-6">
                        <Map />
                    </div>
                    <div className="col-md-3">
                         <Info />
                    </div>
                </div>
            </div>        
        </React.Fragment>
    )
}
export default HomeWrapper;