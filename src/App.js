import React from "react";
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
import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomersDetails from "./components/CustomersDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Workers from "./components/Workers";
import SalesBarGraph from "./components/SalesBarGraph";
import Suppliers from "./components/Suppliers";
import SalesDetails from "./components/SalesDetails";
import Tools from "./components/Tools";
import Tables from "./components/Tables"
import CasualWorkers from "./components/CasualWorkers";
import Consumables from "./components/Consumables"


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
        <Route path="/seasons" component={Seasons} />
        <Route path="/compare" component={Analytics} />

        <Route path="/tables" component={Tables}></Route>
        <Route path="/tools" component={Tools}></Route>
        <Route path="/requisitions" exact component={Requisitions} />
        <Route path="/customers" component={Customers} exact />
        <Route path="/customer/:id" component={CustomersDetails} />
        <Route path="/analytics" component={ExpenditurePieChart} />
        <Route path="/workers" exact component={Workers} />
        <Route path="/suppliers" exact component={Suppliers} />
        <Route path="/saleschart" component={SalesBarGraph} />
        <Route path="/salesdetails" component={SalesDetails} />
        <Route path="/casual" component={CasualWorkers} ></Route>
        <Route path="/consumables" component={Consumables} ></Route>
      </Switch>
    </Router>
  );
}



