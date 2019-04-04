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

  login = (user, password, callback) =>
  {
    let body = {
      username: user,
      password: password
    }

    let onLogin = res =>
    {
      if (res === "error")
        return callback(false);
      sessionStorage.setItem('token', res.key)
      callback(true)
    }

    return this.request(
      `auth/login/`, null, onLogin, 'post', body);

  }
}

export default Auth;