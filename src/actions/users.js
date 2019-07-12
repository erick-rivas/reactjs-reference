/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via builder
    - Modify fetch data
    - Only override existing methods if required

  Base methods:
    - getUserList(filters, callback)
    - getUserDetails(userId, callback)
    - saveUser(user, callback)
    - setUser(userId, user, callback)
    - deleteUser(userId, callback)
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
