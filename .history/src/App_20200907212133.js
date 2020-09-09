import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';

import Login from './components/login/Login';
import LoginOne from './components/login/LoginOne';
import LoginThree from './components/login/LoginThree';
import LoginFour from './components/body/LoginFour'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props)=><Login {...props}/>} />
        <Route exact path="/login-1" component={(props)=><LoginOne {...props}/>} />
        <Route exact path="/login-3" component={(props)=><LoginThree {...props}/>} />
        <Route exact path="/login-4" component={(props)=><LoginFour {...props}/>} />
      </Switch>
    </div>
  );
}

export default App;
