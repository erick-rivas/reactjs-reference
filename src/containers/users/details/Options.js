/*
__Seed builder__v1.0

  Guidelines:
    - Modify default methods & attributes via SeedManifest.yaml
    - Include extra states & props according to current models or ACTIONS
      - Example getTopPlayers()

  Default attributes:
    - users
    - teams

  Default methods:
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
