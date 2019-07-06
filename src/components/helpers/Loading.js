import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from 'resources/css/helpers/Loading.module.css';


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
