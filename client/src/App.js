import React from 'react';
import { Route, Switch } from 'react-router-dom'

import About from './About.js'
import Home from './Home.js'
import Contests from './Contests.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contests" component={Contests} />
      </Switch>
    </div>
  );
}

export default App;
