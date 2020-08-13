import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import Activities from './Activities';
import Customers from "./Customers";
import ExpenditurePieChart from './ExpenditurePieChart'
import SalesBarGraph from './SalesBarGraph'
import Dashboard from './materialDesign/Dashboard'
import '../css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/mi-dashboard" component={Dashboard}></Route>
          <Route path="/customers" component={Customers} exact></Route>
          <Route path="/activities" component={Activities} exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
