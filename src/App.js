import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeWrapper from './components/Wrapper/HomeWrapper';
import ProjectsWrapper from './components/Wrapper/ProjectsWrapper';
import { Provider } from 'react-redux';
import store from './components/Bucket/Store';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components for different pages
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/homeWrapper">
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/megh">
                    Meghalaya
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/homeWrapper" element={<HomeWrapper />} />
            <Route path="/megh" element={<ProjectsWrapper />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
