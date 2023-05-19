import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './components/Bucket/Store';
import Header from './components/Header';
import Map from './components/Map';
import Info from './components/Info';
import LayerTree from './components/LayerTree';
import HomeWrapper from './components/HomeWrapper';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
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
          <Switch>
            <Route exact path="/" element={<HomeWrapper />} />
            <Route path="/projects" element={<Projects />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
