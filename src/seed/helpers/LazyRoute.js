/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Helper component
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