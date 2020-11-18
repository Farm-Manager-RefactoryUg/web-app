import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Settings from "./pages/Settings";
import ForgotPassword from './pages/ForgotPassword';
import PageNotFound from './pages/PageNotFound';
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Seasons from "./pages/Seasons";
import Analytics from "./pages/Analytics";

import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomersDetails from "./components/CustomersDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Workers from "./components/Workers";
import SalesBarGraph from "./components/SalesLineGraph";
import Suppliers from "./components/Suppliers";
import SalesDetails from "./components/SalesDetails";
import Tools from "./components/Tools";
import Tables from "./components/Tables"
import CasualWorkers from "./components/CasualWorkers";
import Consumables from "./components/Consumables"

// List (Read all)
// - create
// - Read (Read one - {id})
// - Update / Patch - {id}
// - Delete {id}

// List - http://localhost:3000/projects
// Create - http://localhost:3000/projects/add
// Read - http://localhost:3000/projects/{id}
// Update - http://localhost:3000/projects/{id}/edit
// Delete - http://localhost:3000/projects/{id}/delete



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



