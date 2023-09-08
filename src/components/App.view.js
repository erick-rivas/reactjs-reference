import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import Examples from "seed/examples/components/Examples";
import "styles/css/App.css";

const AppView = () =>
  <div id="app">
    <BrowserRouter>
      <Switch>
        <Route path="/examples" component={Examples} />
        <Redirect to="/examples" />
      </Switch>
    </BrowserRouter>
  </div>;

AppView.propTypes = {};

export default AppView;