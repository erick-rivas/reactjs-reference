/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';

import cls from 'resources/css/seed/templates/auth/Login.module.css';

class Login extends React.Component
{
  render()
  {
    return (
      <div className={cls.module}>
        <div className={cls.background}>
          <div className={cx(cls.container, 'animated zoomIn')}>
              <label className={cls.title}>Login</label>
              <form onSubmit={this.onSubmit}>
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
                {this.state.error ?
                  <div className={cls.error}>{this.state.error}</div> : null}
                <button type="submit" className={cls.submit}>Login</button>
              </form>
             
          </div>

        </div>
      </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  /* Events */

  onSubmit(e)
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    this.login(email, password);
  }

  /* Actions */

  login(email, password)
  {
    let callback = res =>
    {
      if (res.ok) this.onLogin(res.body);
      else this.onError(res.body);
    };
    this.props.login(email, password, callback);
  }

  onLogin(res)
  {
    this.props.history.replace('/');
  }

  onError(error)
  {
    this.setState({
      error: 'Invalid user or password'
    })
  }
}

export default redux(Login);
