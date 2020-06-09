import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
