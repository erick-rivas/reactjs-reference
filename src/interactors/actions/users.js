/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing methods if required

  Methods:
    - getUserList(filters, callback)
    - getUserDetails(userId, callback)
    - saveUser(user, callback)
    - setUser(userId, user, callback)
    - deleteUser(userId, callback)
*/

import _Users from '_seed/interactors/actions/users';

class Users extends _Users {}

export default Users;
