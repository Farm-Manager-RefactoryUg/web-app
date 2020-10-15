import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Settings from "./components/Settings";
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';
import UserProfile from "./components/UserProfile";
import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomerDetails from "./components/CustomerDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Workers from "./components/Workers";
import SalesBarGraph from "./components/SalesBarGraph";
import Suppliers from "./components/Suppliers";
import SalesDetails from "./components/SalesDetails";
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import Projects from "./components/Projects";


export default function App() {

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
        <Route path="/requisitions" exact component={Requisitions} />
        <Route path="/customers" component={Customers} exact />
        <Route path="/customer/:id" component={CustomerDetails} />
        <Route path="/workers" exact component={Workers} />
        <Route path="/suppliers" exact component={Suppliers} />
        <Route path="/saleschart" component={SalesBarGraph} />
        <Route path="/analytics" component={ExpenditurePieChart} />
        <Route path="/salesdetails" component={SalesDetails} />
      </Switch>
    </Router>
  );
}



