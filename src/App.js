import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
import Activities from "./components/Activities";
import Customers from "./components/Customers";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Requisitions from './components/Requisitions';
import CustomerDetails from './components/CustomerDetails';


import "./css/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route path="/" component={ExpenditurePieChart} exact />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/requisitions" component={Requisitions} />
            <Route path="/customers" component={Customers} axact></Route>
            <Route path="/activities" component={Activities} exact></Route>
            <Route path="/customer/:id" component={CustomerDetails}></Route>
            {/* <Route path="/notifications" component={Notifications}></Route> */}
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}
}

export default App;
