/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';

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

export default redux(Logout);
