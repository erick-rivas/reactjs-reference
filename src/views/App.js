import React from "react";
import cx from "classnames";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Docs from "components/Docs";
import Examples from "seed/examples/components/Examples";
import css from "resources/css/App.module.css";

const App = (props) =>
  <div class={css.module}>
    <Router>
      <Switch>
        <Route path="/examples" component={Examples} />
        <Route path="/docs" component={Docs} />
        <Redirect to="/docs" />
      </Switch>
    </Router>
  </div>;

export default App;