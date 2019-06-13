/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import UserActions from 'actions/users';
import TeamActions from 'actions/teams';

class _UserBase
{
  users = new UserActions();
  teams = new TeamActions();

  _baseStates = (state, props) => ({
      users: state.users.dataset,
      teams: state.teams.dataset,
  });

  _baseDisps = disp => ({
    getUserDetails: (userId, callback) =>
      disp(this.users.getUserDetails(userId, callback)),
    getUserList: (filters, callback) =>
      disp(this.users.getUserList(filters, callback)),
    getTeamList: (filters, callback) =>
      disp(this.teams.getTeamList(filters, callback)),
    saveUser: (user, callback) =>
      disp(this.users.saveUser(user, callback)),
    setUser: (userId, user, callback) =>
      disp(this.users.setUser(userId, user, callback)),
    deleteUser: userId =>
      disp(this.users.deleteUser(userId)),
  })

  _states = state => ({});
  states = state => ({});

  _disps = disp => ({});
  disps = disp => ({});

  dispToProps = (disp, props) => ({
    ...this._baseDisps(disp,props), ...this._disps(disp, props), ...this.disps(disp, props)
  });

  stateToProps = (state, props) => ({
    ...this._baseStates(state,props), ...this._states(state, props), ...this.states(state, props)
  });
}

export default _UserBase;

