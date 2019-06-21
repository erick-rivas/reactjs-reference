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

import _UserDetailsOptions from '_seed/containers/users/details/Options';

class UserDetailsOptions extends _UserDetailsOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserDetailsOptions().getRouter()
