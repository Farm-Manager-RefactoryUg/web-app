import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/login'
import SignUp from './components/signup'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
