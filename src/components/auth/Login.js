/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Component from 'components/auth/Login.link.js'

import styles from 'resources/css/auth/Login.module.css';

class Login extends Component
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
}

export default Login;
