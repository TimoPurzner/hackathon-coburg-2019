import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import Winner from './sites/winner'
import Login from './sites/login'
import Index from './sites/index'
import Workspaces from './sites/workspaces'
import Api from './api/api'

new Api();

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/workspaces' component={Workspaces}/>
          <Route exact path='/winner' component={Winner}/>
        </Switch>
      </Router>
  );
}

export default App;
 
