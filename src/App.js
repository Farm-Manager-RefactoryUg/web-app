import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
<<<<<<< HEAD
import Activities from "./components/Activities";
import Customers from "./components/Customers";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Requisitions from './components/Requisitions';
import CustomerDetails from './components/CustomerDetails';


import "./css/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
import Activities from "./component/Activities";
import Customers from "./component/Customers";
import ExpenditurePieChart from "./component/ExpenditurePieChart";
import SalesBarGraph from "./component/SalesBarGraph";
import "../css/App.css";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> 6e91d78bfbc4325593009ebd599ffd75b9eac1d3
import Navbar from './components/Navbar';
// import { NavigationBar } from './components/NavigationBar';
// import { Sidebar } from './components/Sidebar';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
render () {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
       <React.Fragment>
      <Router>
           <Navbar />
          <Switch>
            
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <ExpenditurePieChart />
        {/* <SalesBarGraph/> */}
       
          {/* <Route path="/" component={Dashboard} exact></Route> */}
          {/* <Route path="/piechart" component={ExpenditurePieChart} exact /> */}
          {/* <Route path="/bargraph" component={SalesBarGraph} /> */}
          <Route path="/customers" component={Customers} exact></Route>
          <Route path="/activities" component={Activities} exact></Route>
        </Switch >
    
      </Router>
     </React.Fragment>
     

>>>>>>> 6e91d78bfbc4325593009ebd599ffd75b9eac1d3
    </div>
  );
}
}

export default App;
