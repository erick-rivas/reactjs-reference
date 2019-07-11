/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';

class Logout extends React.Component
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

export default Logout;
