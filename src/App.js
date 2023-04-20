import React, { useState,useEffect } from 'react'
import Header from './components/Header';
import Map from './components/Map';
import Info from './components/Info';
import LayerTree from './components/LayerTree';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';

function App() {
  const [distName, setDistName]=useState("Hello")
  useEffect(()=>{
    setDistName("Test")
    console.log("component mounted")
    fetch("https://api.nesdr.gov.in/asdma/flood-low.php")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
}
  ,[])
  return (
    <>

      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <LayerTree />
    <>{distName}</>
            </div>
          <div className="col-md-6">
            <Map />
          </div>
          <div className="col-md-3">
            <Info />
          </div>
        </div>
      </div>
    </>    
  );
}
export default App;