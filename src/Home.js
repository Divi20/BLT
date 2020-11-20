import React from "react";
import { Tabs, Tab, AppBar, Button } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
import HomePage from './HomePage';
import Weather from './Weather';
import Login from './Login';




export default function Home() {
 
  const routes = ["/home", "/weather","/logout"];

  return (
    <div>
      <BrowserRouter >
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              style={{display:'flex',justifyContent:'flex-end'}}>
                {console.log(history.location.pathname)}
                <Tab
                  value={routes[0]}
                  label="home"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="weather"
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                value={routes[2]}
                label="logout"
                component={Link}
                to={routes[2]}
              />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route  path="/home" component={HomePage} />
          <Route  path="/weather" component={Weather} />
          <Redirect from="/logout" to="/login"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

