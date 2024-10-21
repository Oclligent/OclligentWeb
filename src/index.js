import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Drone from "./_Projects_/DroneProject/Drone";
import House from "./_Projects_/HouseProject/House";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/drone" element={<Drone />} />
        <Route path="/house" element={<House />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


