/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Component from 'components/helpers/Loading.link.js'

import styles from 'resources/css/helpers/Loading.module.css';

class Loading extends Component
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
