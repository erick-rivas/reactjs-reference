import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "examples/auth/Login";
import Logout from "examples/auth/Logout";
import Analytics from "examples/nav/Analytics";
import Home from "examples/Home";
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
        <Route path={"/"}
          component={Analytics} />
      </Router>
    </div>
  );
}

export default Examples;
