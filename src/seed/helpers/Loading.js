/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import css from "resources/css/seed/styles/Loading.module.css";

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