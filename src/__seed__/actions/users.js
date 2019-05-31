/*
__Seed builder__v1.0
*/

import Executor from 'actions/helpers/executor'

class _Users extends Executor
{
  constructor()
  {
    super(
      `USERS`,
      `users`,
      state => state.users
    )
  }

  getUserList = (filters = {}) =>
  {
    let params = '';
    for (let filter in filters) 
      params += `{filter}=${filters[filter]}&`;
    return this.getList(`${params}`);
  }

  getUserDetails = userId =>
  {
    return this.getDetails(userId);
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
