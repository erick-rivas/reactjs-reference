/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import css from "styles/css/seed/styles/Loading.module.css";

class Loading extends React.Component {
  render() {
    return (
      <div className={css.module}>
        <CircularProgress className={css.loading} />
      </div>
    );
  }
}

Loading.propTypes = {};

export default Loading;