/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import _Logout from '_seed/components/auth/Logout';

import styles from 'util/css/auth/Logout.module.css';

class Logout extends _Logout
{
  render()
  {
    return (
    <div className={styles.module}></div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  onLogout(res)
  {
    //Suggested method
    this.props.history.replace('/login');
  }

  onError(error)
  {
    //Suggested method
    this.props.history.replace('/login');
  }
}

export default Logout;
