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

import _UserForm from '_seed/containers/users/Form';

class UserForm extends _UserForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserForm().getRouter()
