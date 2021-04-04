import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "seed/examples/components/auth/Login";
import Logout from "seed/examples/components/auth/Logout";
import Home from "seed/examples/components/Home";

const Examples = () =>
  <BrowserRouter basename="/examples">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>;

Examples.propTypes = {};

export default Examples;