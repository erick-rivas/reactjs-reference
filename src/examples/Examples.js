import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Login from "examples/general/auth/Login";
import Logout from "examples/general/auth/Logout";
import Analytics from "examples/general/nav/Analytics"
import Home from "examples/Home";

import cx from "classnames";
import styles from "resources/css/examples/Examples.module.css";

function Examples(props)
{
  const { path } = props.match;
  return (
    <div className={styles.module}>
      <Router>
        <Switch>
          <Route path={`${path}/login`}
            component={Login} />
          <Route path={`${path}/logout`}
            component={Logout} />
          <Route path={`${path}/app`}
            component={Home} />
          <Redirect to={`${path}/app`} />
        </Switch>
        <Route path={`/`}
          component={Analytics} />
      </Router>
    </div>
  );
}

export default Examples;
