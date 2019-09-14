import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import OTWHome from './components/OTWHome'
import banditData from './components/bandit/banditData.json'
import BanditLevelComponent from './components/bandit/BanditLevelComponent'
import BanditHome from './components/bandit/BanditHome'
import NatasHome from './components/natas/NatasHome'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
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
      </Switch>
    
    </div>
  );
}

export default App;
