/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Modify fetch data
    - Only override existing methods if required

  Default methods:
    - getUserList(filters, callback)
    - getUserDetails(userId, callback)
    - saveUser(user, callback)
    - setUser(userId, user, callback)
    - deleteUser(userId, callback)

  Request methods:
    - request(path, toDisp, callback, method = "GET", body = {})
      - Use this parent method to call new actions
*/

import _Users from 'seed/actions/users';

class Users extends _Users 
{
  constructor()
  {
    const fetch = [
      "teams.*",
    ]
    super(fetch)
  }
}

export default Users;
