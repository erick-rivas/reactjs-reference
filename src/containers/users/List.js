/*
__Seed builder__v1.0
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
