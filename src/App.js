import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Settings from "./components/Settings";
// import ForgotPassword from './components/ForgotPassword';
// import PageNotFound from './components/PageNotFound';
// import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import Projects from "./components/Projects";
// import Seasons from "./components/Seasons";
// import Analytics from "./components/Analytics";
import Home from "./components/Home";
// import Seasons from "./components/Seasons";
// import Analytics from "./components/Analytics";
import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomerDetails from "./components/CustomersDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Workers from "./components/Workers";
import {SalesBarGraph} from "./components/SalesBarGraph";
import Suppliers from "./components/Suppliers";
import SalesDetails from "./components/SalesDetails";
//import Dashboard from "./components/Dashboard";
//import Project from "./components/Project";
//import Projects from "./components/Projects";
//import Settings from "./components/Settings";
import Tables from "./components/Tables"
import Tools from "./components/Tools";
import CasualWorkers from "./components/CasualWorkers";
import Consumables from "./components/Consumables"
//import NewTable from "./components/NewTable";
//mport CustomersDashboard from "./components/CustomersDashboard";



export default function App() {

  return (
    <Router>
      
        <>
          <Switch>
          <Route path="//" component={Home} exact></Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/requisitions" exact component={Requisitions} />
            <Route path="/customers" component={Customers} exact></Route>
            <Route path="/customer/:id" component={CustomerDetails}></Route>
            <Route path="/workers" exact component={Workers}></Route>
            <Route path="/suppliers" exact component={Suppliers}></Route>
            <Route path="/saleschart" component={SalesBarGraph}></Route>
            <Route path="/analytics" component={ExpenditurePieChart}></Route>
            <Route path="/salesdetails" component={SalesDetails}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/settings" component={Settings}></Route>
            <Route path="/tables" component={Tables}></Route>
          <Route path="/tools" component={Tools}></Route>
          <Route path="/casual" component={CasualWorkers} ></Route>
          <Route path="/consumables" component={Consumables} ></Route>
          </Switch>
        </>
    </Router>
  );
}



