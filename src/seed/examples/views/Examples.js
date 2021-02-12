import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "seed/examples/components/auth/Login";
import Logout from "seed/examples/components/auth/Logout";
import Analytics from "seed/examples/components/nav/Analytics";
import Home from "seed/examples/components/Home";
import css from "resources/css/seed/examples/Examples.module.css";

const Examples = (props) =>
  <div class={css.module}>
    <Router>
      <Switch>
        <Route path={`${props.path}/login`}
          component={Login} />
        <Route path={`${props.path}/logout`}
          component={Logout} />
        <Route path={`${props.path}/app`}
          component={Home} />
        <Redirect to={`${props.path}/app`} />
      </Switch>
      <Route path={"/"}
        component={Analytics} />
    </Router>
  </div>;

export default Examples;