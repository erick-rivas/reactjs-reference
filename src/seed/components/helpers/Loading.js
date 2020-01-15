/*
__Seed builder__v0.1.8
  (Read_only) Builder helper
*/

import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "resources/css/seed/helpers/Loading.module.css";


class Loading extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
        <CircularProgress className={styles.loading}/>
      </div>
    );
  }
}

export default Loading;
