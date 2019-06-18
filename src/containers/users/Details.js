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

import _UserDetails from '_seed/containers/users/Details';

class UserDetails extends _UserDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserDetails().getRouter()
