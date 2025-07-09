/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import { Route, LazyComponent } from "seed/helpers"

class LazyRoute extends React.Component {
  render() {
    return <Route
      {...this.props}
      component={(props) => <LazyComponent component={this.props.component} {...props} />}
    />
  }
}

export default LazyRoute;