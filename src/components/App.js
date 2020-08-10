import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Activities from './Activities';
import Customers from "./Customers";
import '../css/App.css';
import  Nav  from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Dashboard} exact></Route>
          <Route path="/customers" component={Customers} exact></Route>
          <Route path="/activities" component={Activities}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
