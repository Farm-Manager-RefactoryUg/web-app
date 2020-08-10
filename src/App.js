import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
// import { NavigationBar } from './components/NavigationBar';
// import { Sidebar } from './components/Sidebar';
// import logo from './logo.svg';
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
