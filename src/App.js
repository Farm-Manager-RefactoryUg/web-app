import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Settings from "./components/Settings";
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';
import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Seasons from "./components/Seasons";
import Analytics from "./components/Analytics";

=======
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import SignUp from "./components/signup";
// import Activities from "./components/Activities";
>>>>>>> 4e1269e93fd59e1d8551ed306477b0585b647921
import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomerDetails from "./components/CustomerDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Workers from "./components/Workers";
import SalesBarGraph from "./components/SalesBarGraph";
<<<<<<< HEAD
import Suppliers from "./components/Suppliers";
import SalesDetails from "./components/SalesDetails";
import Tools from "./components/Tools";
import Tables from "./components/Tables"

=======
import Home from './components/Home'
import Suppliers from "./components/Suppliers";
import Payroll from "./components/Payroll";
import Customer from "./components/Customer";

//import Example from "./components/Example";
//import { Button } from "react-bootstrap";
>>>>>>> 4e1269e93fd59e1d8551ed306477b0585b647921

export default function App() {

<<<<<<< HEAD
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/project" component={Project} />
        <Route path="/projects" component={Projects} />
        <Route path="/settings" component={Settings} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/pagenotfound" component={PageNotFound} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/seasons" component={Seasons} />
        <Route path="/compare" component={Analytics} />
        
        <Route path="/tables" component={Tables}></Route>
        <Route path="/tools" component={Tools}></Route>
        <Route path="/requisitions" exact component={Requisitions} />
        <Route path="/customers" component={Customers} exact />
        <Route path="/customer/:id" component={CustomerDetails} />
        <Route path="/analytics" component={ExpenditurePieChart} />
        <Route path="/workers" exact component={Workers} />
        <Route path="/suppliers" exact component={Suppliers} />
        <Route path="/saleschart" component={SalesBarGraph} />
        <Route path="/salesdetails" component={SalesDetails} />
      </Switch>
    </Router>
  );
=======
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
              {/* <Route path="/activities" component={Activities} exact></Route> */}
              <Route path="/suppliers" component={Suppliers}></Route>
              <Route path="/payroll" component={Payroll}></Route>
              <Route path="/customers" component={Customer}></Route>
              {/* <Route path="/activities" component={Activities} exact></Route> */}
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
>>>>>>> 4e1269e93fd59e1d8551ed306477b0585b647921
}



