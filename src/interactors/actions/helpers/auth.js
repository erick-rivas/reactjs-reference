import Action from 'interactors/actions/helpers/action'

class Auth extends Action
{
  constructor()
  {
    super(
      `AUTH`,
      `auth`,
      state => state.auth
    )
  }

  login = (email, password, callback) =>
  {
    const onLogin = res =>
    {
      sessionStorage.setItem('token', res.body.key);
      sessionStorage.setItem('id', res.body.user);
      callback(res);
    }

    const body = {
      email: email,
      password: password
    }

    return this.request(
      `auth/login/`, this.onLogin, onLogin, 'POST', body);
  }

  logout = callback => 
  {
    const onLogout = res =>
    {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('id');
      callback(res);
    }

    return this.request(
      `auth/logout/`, this.onLogout, onLogout, 'POST', {});
  }

  onLogin = data => ({
    type: `${this.id}_LOGIN`,
    data: data
  });

  onLogout = () => ({
    type: `${this.id}_LOGOUT`
  });

}

export default Auth;