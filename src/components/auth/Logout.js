/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import styles from 'resources/css/auth/Logout.module.css';

class Logout extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}></div>
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

  componentDidMount()
  {
    this.logout();
  }

  /* Events */

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

  /* Actions */

  logout()
  {
    let callback = res => 
    {
      if (res.ok) this.onLogout(res.body);
      else this.onError(res.body);
    }
    this.props.logout(callback);
  }
}

export default redux(Logout);
