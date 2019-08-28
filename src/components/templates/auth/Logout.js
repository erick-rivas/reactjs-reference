/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';

import c from 'resources/css/templates/auth/Logout.module.css';

class Logout extends React.Component
{
  render()
  {
    return (
      <div className={c.module}></div>
    );
  }

  /*
  * Component logic
  */

  componentDidMount()
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
    this.props.history.replace('/');
  }

  onError(error)
  {
    this.props.history.replace('/');
  }
}

export default redux(Logout);
