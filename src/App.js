import React from 'react';
// react-roouter-dom for routes
import {
  BrowserRouter as Router,
} from "react-router-dom";

// inner componet 
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;