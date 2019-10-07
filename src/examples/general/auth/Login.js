/*
__Seed builder__v0.1.7
*/

import React, { useState } from 'react';
import { usePost } from 'seed/api'

import cx from 'classnames';
import styles from 'resources/css/examples/general/auth/Login.module.css';

function Login(props)
{
  const [state, setState] = useState(0);
  const [cLogin, qLogin] = usePost("/auth/login", {
    onCompleted: data =>
    {
      sessionStorage.setItem('token', data.key);
      sessionStorage.setItem('id', data.user);
      props.history.replace('/');
    },
    onError: error => setState({ error: 'Invalid user or password' })
  });

  const onSubmit = e =>
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    cLogin({email: email, password: password});
  }

  return (
    <div className={styles.module}>
      <div className={styles.background}
        style={ { backgroundImage: `url(${require("resources/images/wave.svg")})` }}>
        <div className={cx(styles.container, 'animated zoomIn')}>

            <label className={styles.title}>Login</label>
            <form onSubmit={onSubmit}>
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
              {state.error ?
                <div className={styles.error}>{state.error}</div> : null}
              <button type="submit" className={styles.submit}>Login</button>
            </form>

        </div>

      </div>
    </div>
  );
}

export default Login;
