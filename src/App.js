import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import OTWHome from './components/OTWHome'
import banditData from './components/bandit/banditData.json'
import BanditHome from './components/bandit/BanditHome'
import BanditLevelComponent from './components/bandit/BanditLevelComponent'
import natasData from './components/natas/natasData.json'
import NatasHome from './components/natas/NatasHome'
import NatasLevelComponent from './components/natas/NatasLevelComponent'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path='/' component={OTWHome} />
        <Route path='/home' component={OTWHome} />
        <Route path='/bandit/home' component={BanditHome} />
        {
          banditData.banditData.map( level => {
            return (
              <Route  key={level.level} 
                      path={`/bandit/level${level.level}`} 
                      component={() => <BanditLevelComponent levelData={level} />}
              />
            )
          })
        }
        <Route path='/natas/home' component={NatasHome} />
        {
          natasData.natasData.map( level => {
            return (
              <Route  key={level.level} 
                      path={`/natas/level${level.level}`} 
                      component={() => <NatasLevelComponent levelData={level} />}
              />
            )
          })
        }
      </Switch>
    
    </div>
  );
}

export default App;
