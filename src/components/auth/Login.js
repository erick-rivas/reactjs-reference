/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import _Login from 'sbuild/components/auth/Login';

import styles from 'util/css/auth/Login.module.css';

class Login extends _Login
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
              {this.renderError()}
              <button type="submit" className={styles.submit}>Login</button>
            </form>
           
        </div>

      </div>
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

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
}

export default Login;
