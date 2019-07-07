/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Action from 'actions/helpers/action';

class _Users extends Action
{
  constructor(fetch)
  {
    super(
      `USERS`,
      `users`,
      state => state.users,
      fetch
    )
  }

  getUserList = (params = {}, callback) =>
  {
    return this.getList(params, callback);
  }

  getUserDetails = (userId, callback) =>
  {
    return this.getDetails(userId, callback);
  }

  saveUser = (user, callback) =>
  {
    return this.saveData(user, callback);
  }

  setUser = (userId, user, callback) =>
  {
    return this.setData(userId, user, callback);
  }

  deleteUser = (userId, callback) =>
  {
    return this.deleteData(userId, callback);
  }
}

export default _Users;
