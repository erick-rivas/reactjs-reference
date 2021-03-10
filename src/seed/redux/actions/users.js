/*
__Seed builder__v0.2.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from "seed/redux/action";

class _Users extends Action {
  constructor(fetch) {
    if (fetch == null)
      fetch = [
        "teams.*",
      ];

    super(
      "USERS",
      "users",
      (state) => state.users,
      fetch
    );
  }

  getUserList(params = {}, callback) {
    return this.getList("", params, callback);
  }

  getUserDetails(userId, callback) {
    return this.getDetails("", userId, callback);
  }

  saveUser(user, callback) {
    return this.postData("", user, callback);
  }

  setUser(userId, user, callback) {
    return this.putData("", userId, user, callback);
  }

  deleteUser(userId, callback) {
    return this.deleteData("", userId, callback);
  }
}

export default _Users;