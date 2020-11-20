
import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';





export default function App() {

  return (
    
      <BrowserRouter >
        <Switch>
          <Route  path="/home" component={Home} />
          <Route  path="/login" component={Login}/>
          <Route  path="/signup" component={Signup} />
          <Redirect from="/" to="/home" />
          
        </Switch>
      </BrowserRouter>
    
  );
}

