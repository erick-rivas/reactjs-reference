/*
__Seed builder__v1.0
*/

import React, { useState } from 'react';
import * as api from 'seed/api'
import cx from 'classnames';

import cls from 'resources/css/seed/templates/auth/Login.module.css';

function Login(props)
{
  const [state, setState] = useState(0);

  const [login, onLogin] = api.post("/auth/login")

  if (onLogin.called && !onLogin.loading) {
    if (onLogin.error == null){
      sessionStorage.setItem('token', onLogin.data.key);
      sessionStorage.setItem('id', onLogin.data.user);
      props.history.replace('/');
    } else setState({ error: 'Invalid user or password' })
  }

  const onSubmit = e =>
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    login({body: {email: email, password: password}});
  }

  return (
    <div className={cls.module}>
      <div className={cls.background}>
        <div className={cx(cls.container, 'animated zoomIn')}>
            <label className={cls.title}>Login</label>
            <form onSubmit={onSubmit}>
              <label className={cls.emailLbl}>Email</label><br/>
              <input className={cls.email}
                name="email"
                type="email"
                required /><br/>
              <label className={cls.passwordLbl}>Password</label><br/>
              <input className={cls.password}
                name="password"
                type="password"
                required /><br/>
              <input className={cls.remember}
                name="remember"
                type="checkbox" />
              <label className={cls.rememberLbl}>Remember me</label><br/>
              {state.error ?
                <div className={cls.error}>{state.error}</div> : null}
              <button type="submit" className={cls.submit}>Login</button>
            </form>

        </div>

      </div>
    </div>
  );
}

export default Login;
