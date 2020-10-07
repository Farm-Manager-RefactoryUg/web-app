import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Customers from "./components/Customers";
import Requisitions from "./components/Requisitions";
import CustomerDetails from "./components/CustomerDetails";
import ExpenditurePieChart from "./components/ExpenditurePieChart";
import Workers from "./components/Workers";
import SalesBarGraph from "./components/SalesBarGraph";
import Home from './components/Home';
import Suppliers from "./components/Suppliers";
import SalesDetails from "./components/SalesDetails";
import Dashboard from "./components/dashboard";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Analytics from "./components/Analytics"
import Settings from "./components/Settings";

function App() {

  return (
    <Router>
      <div className="App">
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
            <Route path="/analytics" component={Analytics}></Route>
            <Route path="/salesdetails" component={SalesDetails}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/settings" component={Settings}></Route>
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;



