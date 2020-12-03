import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import Settings from "./pages/Settings"
import ForgotPassword from "./pages/ForgotPassword"
import PageNotFound from "./pages/PageNotFound"
import UserProfile from "./pages/UserProfile"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Projects from "./pages/Projects"
import Seasons from "./pages/Seasons"
import Analytics from "./pages/Analytics"

import Customers from "./pages/Customers"
import Requisitions from "./pages/Requisitions"
import CustomersDetails from "./pages/CustomersDetails"
import ExpenditurePieChart from "./pages/ExpenditurePieChart"
import Workers from "./pages/Workers"
import SalesLineGraph from "./pages/SalesLineGraph"
import Suppliers from "./pages/Suppliers"
import SalesDetails from "./pages/SalesDetails"
import Tools from "./pages/Tools"
import Tables from "./pages/Tables"
import CasualWorkers from "./pages/CasualWorkers"
import Consumables from "./pages/Consumables"

// Endpoints need to be revised i.e.

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
        <Route path="/saleschart" component={SalesLineGraph} />
        <Route path="/salesdetails" component={SalesDetails} />
        <Route path="/casual" component={CasualWorkers}></Route>
        <Route path="/consumables" component={Consumables}></Route>
      </Switch>
    </Router>
  )
}
