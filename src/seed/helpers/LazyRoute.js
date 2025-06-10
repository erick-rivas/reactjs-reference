/*
__Seed builder__
  (Read_only) Component helper
*/

import React, { Suspense } from "react";
import { Loading, Route } from "seed/helpers"

class LazyRoute extends React.Component {
  render() {
    return <Route
      {...this.props}
      component={(props) => <Suspense fallback={<Loading />}><this.props.component {...props} /></Suspense>}
    />
  }
}

export default LazyRoute;