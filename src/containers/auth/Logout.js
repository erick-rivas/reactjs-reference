/*
__Seed builder__v1.0

  Default methods:
    - logout(callback)
*/

import _Logout from '_seed/containers/auth/Logout';

class Logout extends _Logout
{
  states = state => ({
  });

  disps = disp => ({
  })
}

export default new Logout().getRouter()
