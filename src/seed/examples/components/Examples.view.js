/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Route } from "seed/helpers"
import Login from "seed/examples/components/auth/Login";
import Logout from "seed/examples/components/auth/Logout";
import Home from "seed/examples/components/Home";

const ExamplesView = () =>
  <BrowserRouter basename="/examples">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>;

ExamplesView.propTypes = {};

export default ExamplesView;