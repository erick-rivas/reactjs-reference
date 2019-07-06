/*
__Seed builder__v1.0

  Default methods:
    - login(email, password, callback)
*/

import _Login from 'sbuild/containers/auth/Login';

class Login extends _Login
{
  states = state => ({
  });

  disps = disp => ({
  })
}

export default new Login().getRouter()
