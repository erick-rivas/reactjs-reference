/*
__Seed builder__v1.0

  attributes:
    - users
    - teams

  methods:
    - getUserDetails(userId, callback)
    - getUserList(filters, callback)
    - getTeamList(filters, callback)
    - saveUser(user, callback)
    - setUser(userId, user, callback)
    - deleteUser: (userId, callback)
*/

import _UserList from '_seed/containers/users/List';

class UserList extends _UserList
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserList().getRouter()
