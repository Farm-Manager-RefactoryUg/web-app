import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
import Activities from "./components/Activities";
// import landingpage from "./components/landingpage";
import Customers from "./components/Customers";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Requisitions from './components/Requisitions';
import CustomerDetails from './components/CustomerDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./css/App.css";
// import './App.css';
// import Dashboard from './components/materialDesign/Dashboard'

class App extends React.Component{
render () {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          
          
          <Switch>
            {/* <Route exact path="/mi-dashboard" component={Dashboard}></Route> */}
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/requisitions" component={Requisitions} />
            {/* <Route path="/landing" component={landingpage} ></Route> */}
            <Route path="/customers" component={Customers} ></Route>
            <Route path="/activities" component={Activities} ></Route>
            <Route path="/customer/:id" component={CustomerDetails}></Route>
            <Route path="/analytics" component={ExpenditurePieChart} ></Route>
            {/* <Route path="/notifications" component={Notifications}></Route> */}
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}
}

export default App;
