/*
__Seed builder__
  (Read_only) Component helper
*/

import React, { Suspense } from "react";
import { Loading } from "seed/helpers"

class LazyComponent extends React.Component {
  render() {
    return <Suspense fallback={<Loading />}><this.props.component {...this.props} /></Suspense>
  }
}

export default LazyComponent;