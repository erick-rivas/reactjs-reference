/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import styles from 'resources/css/templates/auth/Logout.module.css';

class Logout extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}></div>
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
    this.logout();
  }

  /* Props */

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

  logout = () =>
  {
    let callback = res => {
      if (res.ok) this.onLogout(res.body);
      else this.onError(res.body);
    }
    this.props.logout(callback);
  }
}

export default redux(Logout);
