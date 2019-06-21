/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing states & disp if required

  Attributes:
    - users
    - teams

  Methods:
    - getUserDetails(userId, callback)
    - getUserList(filters, callback)
    - getTeamList(filters, callback)
    - saveUser(user, callback)
    - setUser(userId, user, callback)
    - deleteUser: (userId, callback)
*/

import _UserListOptions from '_seed/containers/users/list/Options';

class UserListOptions extends _UserListOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserListOptions().getRouter()
