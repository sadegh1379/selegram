import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';

import Login from './components/login/Login';
import LoginOne from './components/login/LoginOne';
import LoginThree from './components/login/LoginThree';
import LoginFour from './components/body/loginfour/LoginFour';
import DetailPage from './components/body/detail/DetailPage';
import Cart from './components/cart/Cart';
import Search from './components/search/Search';
import Add from './components/addComponent/Add';
import MainPage from './components/instapages/MainPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={(props)=><Login {...props}/>} />
        <Route exact path="/login-1" component={(props)=><LoginOne {...props}/>} />
        <Route exact path="/login-3" component={(props)=><LoginThree {...props}/>} />
        <Route exact path="/detailpage" component={(props)=><DetailPage {...props}/>} />
        <Route exact path="/" component={()=><LoginFour/>} />
        <Route exact path="/cart" component={()=><Cart/>} />
        <Route exact path="/search" component={()=><Search/>} />
        <Route exact path="/add" component={()=><Add/>} />
        <Route exact path="/instapage" component={()=><MainPage/>} />
      </Switch>
    </div>
  );
}

export default App;
