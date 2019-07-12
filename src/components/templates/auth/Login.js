/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import styles from 'resources/css/templates/auth/Login.module.css';

class Login extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
        <div className={styles.background}>
          <div className={cx(styles.container, 'animated zoomIn')}>
              <label className={styles.title}>Login</label>
              <form onSubmit={this.onSubmit}>
                <label className={styles.emailLbl}>Email</label><br/>
                <input className={styles.email} 
                  name="email"
                  type="email"
                  required /><br/>
                <label className={styles.passwordLbl}>Password</label><br/>
                <input className={styles.password} 
                  name="password"
                  type="password"
                  required /><br/>
                <input className={styles.remember} 
                  name="remember"
                  type="checkbox" />
                <label className={styles.rememberLbl}>Remember me</label><br/>
                { this.renderError() }
                <button type="submit" className={styles.submit}>Login</button>
              </form>
             
          </div>

        </div>
      </div>
    );
  }

  renderError()
  {
    const { error } = this.state;
    return ( 
      error ? <div className={styles.error}>{error}</div> : null
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

export default redux(Login);
