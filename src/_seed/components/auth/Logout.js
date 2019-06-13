/*
__Seed builder__v1.0
*/

import * as React from 'react';

class _Logout extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentDidMount()
  {
    this.logout();
  }

  logout = () =>
  {
    let callback = res => {
      if (res.ok) this.onLogout(res.body);
      else this.onError(res.body);
    }
    this.props.logout(callback);
  }


  /* Props */

  onLogout(res) {}
  onError(error) {}
}

export default _Logout;
