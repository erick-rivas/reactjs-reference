/*
__Seed builder__v1.0
*/

import _Users from '__seed__/reducers/users'

class Users extends _Users
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  }
}

export default Users;
