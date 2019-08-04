/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from 'seed/helpers/action';

class _Users extends Action
{
  constructor(fetch)
  {
    if (fetch == null)
      fetch = [
        "teams.*",
      ];

    super(
      `USERS`,
      `users`,
      state => state.users,
      fetch
    )
  }

  getUserList(params = {}, callback)
  {
    return this.getList('', params, callback);
  }

  getUserDetails(userId, callback)
  {
    return this.getDetails(userId, '', callback);
  }

  saveUser(user, callback)
  {
    return this.saveData('', user, callback);
  }

  setUser(userId, user, callback)
  {
    return this.setData(userId, '', user, callback);
  }

  deleteUser(userId, callback)
  {
    return this.deleteData(userId, '', callback);
  }
}

export default _Users;
