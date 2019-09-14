import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import OTWHome from './components/OTWHome'
import BanditHome from './components/bandit/BanditHome'
import BanditLevel01 from './components/bandit/BanditLevel01'
import BanditLevel02 from './components/bandit/BanditLevel02'
import BanditLevel03 from './components/bandit/BanditLevel03'
import NatasHome from './components/natas/NatasHome'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route path='/home' component={OTWHome} />
        <Route path='/bandit/home' component={BanditHome} />
        <Route path='/bandit/level01' component={BanditLevel01} />
        <Route path='/bandit/level02' component={BanditLevel02} />
        <Route path='/bandit/level03' component={BanditLevel03} />
        <Route path='/natas/home' component={NatasHome} />
      </Switch>
    
    </div>
  );
}

export default App;
