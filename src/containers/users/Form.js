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

import _UserForm from '_seed/containers/users/Form';

class UserForm extends _UserForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new UserForm().getRouter()
