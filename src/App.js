import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';

import './App.css';

class App extends React.Component{
render () {
  return (
    <div className="App">

    <React.Fragment>
  <Router>
    <Navbar />
  </Router>
</React.Fragment>
    </div>
  );
}
}

export default App;
