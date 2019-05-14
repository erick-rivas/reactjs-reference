import Executor from 'actions/helpers/executor'

class Auth extends Executor
{
  constructor()
  {
    super(
      `AUTH`,
      `auth`,
      state => state.auth
    )
  }

  getAuth = () =>
  {
    return disp =>
    {
      const token = sessionStorage.getItem('token');
      disp(this.onGetAuth(token != null));
    }
  }

  login = (email, password, callback) =>
  {
    const onLogin = res =>
    {
      if (res === "error")
        return callback(false);
      sessionStorage.setItem('token', res.key);
      sessionStorage.setItem('id', res.user);
      callback(true);
    }

    const onState = res =>
    {
      return disp =>
      {
        disp(this.onGetAuth(res !== "error"));
      }
    }

    const body = {
      email: email,
      password: password
    }

    return this.request(
      `auth/login/`, onState, onLogin, 'POST', body);
  }

  logout = callback => 
  {
    const onLogout = res =>
    {
      if (res === "error")
        return callback();
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('id');
      callback();
    }
    
    return this.request(
      `auth/logout/`, null, onLogout, 'POST', {});
  }

  onGetAuth = data => ({
    type: `AUTH_LOGGED`,
    logged: data
  });
}

export default Auth;