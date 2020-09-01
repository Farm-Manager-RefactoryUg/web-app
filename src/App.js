import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import SignUp from "./components/signup";
import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomerDetails from "./components/CustomerDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Workers from "./components/Workers";
import SalesBarGraph from "./components/SalesBarGraph";
import Home from './components/Home'
import Suppliers from "./components/Suppliers";
import Payroll from "./components/Payroll";
import Customer from "./components/Customer";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Router>
            <Switch>
              <Route path="//" component={Home} exact></Route>
              <Route path="/login" exact component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/requisitions" component={Requisitions} />
              <Route path="/reports" component={Customers} axact></Route>
              <Route path="/payroll" component={Payroll}></Route>
              <Route path="/customer/:id" component={CustomerDetails}></Route>
              <Route path="/workers" component={Workers}></Route>
              <Route
                path="/expenditurechart"
                component={ExpenditurePieChart}
              ></Route>
              <Route path="/saleschart" component={SalesBarGraph}></Route>
              <Route path="/analytics" component={ExpenditurePieChart}></Route>
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}
export default App;



