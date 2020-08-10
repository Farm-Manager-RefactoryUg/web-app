import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
import Activities from "./component/Activities";
import Customers from "./component/Customers";
import ExpenditurePieChart from "./component/ExpenditurePieChart";
import SalesBarGraph from "./component/SalesBarGraph";
import "../css/App.css";


function App() {
  return (
    <div className="App">
      <Router>
       
          <Switch>
            
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <ExpenditurePieChart />
        {/* <SalesBarGraph/> */}
       
          {/* <Route path="/" component={Dashboard} exact></Route> */}
          {/* <Route path="/piechart" component={ExpenditurePieChart} exact /> */}
          {/* <Route path="/bargraph" component={SalesBarGraph} /> */}
          <Route path="/customers" component={Customers} exact></Route>
          <Route path="/activities" component={Activities} exact></Route>
        </Switch >
    
      </Router>
    </div>
  );
}

export default App;
