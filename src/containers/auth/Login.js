/*
__Seed builder__v1.0
*/

import _Login from '_seed/containers/auth/Login';

class Login extends _Login
{
  states = state => ({
  });

  disps = disp => ({
  })
}

export default new Login().getRouter()
