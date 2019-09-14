import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import OTWHome from './components/OTWHome'
import BanditHome from './components/bandit/BanditHome'
import NatasHome from './components/natas/NatasHome'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route path='/home' component={OTWHome} />
        <Route path='/bandit-home' component={BanditHome} />
        <Route path='/natas-home' component={NatasHome} />
      </Switch>
    
    </div>
  );
}

export default App;
