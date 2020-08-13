import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
import Activities from "./components/Activities";
import Customers from "./components/Customers";
import Requisitions from './components/Requisitions';
import CustomerDetails from './components/CustomerDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component{
render () {
  return (
    <div className="App">
      <React.Fragment>
        <Router> 
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/requisitions" component={Requisitions} />
            <Route path="/customers" component={Customers} axact></Route>
            <Route path="/activities" component={Activities} exact></Route>
            <Route path="/customer/:id" component={CustomerDetails}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}
}

export default App;
