import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

import Winner from './sites/winner'
import Svg from './sites/parkingslots'
import Api from './api/api'

new Api();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Svg}/>
        <Route exact path='/winner' component={Winner}/>
      </Switch>
    </Router>
  );
}

export default App;
 
