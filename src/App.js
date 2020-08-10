import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
import Activities from "./components/Activities";
import Customers from "./components/Customers";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import SalesBarGraph from "./components/SalesBarGraph";
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
          <ExpenditurePieChart />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />

            {/* <SalesBarGraph/> */}

            {/* <Route path="/" component={Dashboard} exact></Route> */}
            {/* <Route path="/piechart" component={ExpenditurePieChart} exact /> */}
            {/* <Route path="/bargraph" component={SalesBarGraph} /> */}
            <Route path="/customers" component={Customers} axact></Route>
            <Route path="/activities" component={Activities} exact></Route>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}
}

export default App;
