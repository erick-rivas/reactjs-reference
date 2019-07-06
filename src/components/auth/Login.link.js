/*
__Seed builder__v1.0
*/

import * as React from 'react';

class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  /* Props */

  onLogin(res)
  {
    //Suggested method
    this.props.history.replace('/');
  }

  onError(error)
  {
    //Suggested method
    this.setState({
      error: 'Invalid user or password'
    })
  }

  /* Events */

  onSubmit = e =>
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let callback = res =>
    {
      if (res.ok) this.onLogin(res.body);
      else this.onError(res.body);
    };
    this.props.login(email, password, callback);
  }
}

export default Login;
