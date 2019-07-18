/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import styles from 'resources/css/debug/Debug.module.css';

class Debug extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
        Debuuug!
      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default Debug;