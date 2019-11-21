import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import Winner from './sites/winner'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Winner}/>
      </Switch>
    </Router>
  );
}

export default App;
 