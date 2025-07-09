/*
__Seed builder__
  (Read_only) Component helper
*/

import React, { Suspense } from "react";
import { Loading, Route, LazyComponent } from "seed/helpers"

class LazyRoute extends React.Component {
  render() {
    return <Route
      {...this.props}
      component={(props) => <LazyComponent {...props} />}
    />
  }
}

export default LazyRoute;