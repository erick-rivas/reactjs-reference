/*
__Seed builder__v1.0
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
