import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'
import Activities from "./component/Activities";
import Customers from "./component/Customers";
import ExpenditurePieChart from "./component/ExpenditurePieChart";
import SalesBarGraph from "./component/SalesBarGraph";
import "../css/App.css";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
// import { NavigationBar } from './components/NavigationBar';
// import { Sidebar } from './components/Sidebar';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
render () {
  return (
    <div className="App">
       <React.Fragment>
      <Router>
           <Navbar />
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
     </React.Fragment>
     

    </div>
  );
}
}

export default App;
