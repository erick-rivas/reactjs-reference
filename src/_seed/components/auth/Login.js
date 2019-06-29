/*
__Seed builder__v1.0
*/

import * as React from 'react';

import styles from 'util/css/auth/Login.module.css';

class _Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
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

  /* Props */

  onLogin() {}
  onError() {}

  /* Components */

  renderError()
  {
    const { error } = this.state;
    return ( 
    error ? <div className={styles.error}>{error}</div> : null
    );
  }
}

export default _Login;
