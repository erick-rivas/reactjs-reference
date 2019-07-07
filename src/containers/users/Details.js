/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import UserActions from 'actions/users';
import TeamActions from 'actions/teams';

import UserDetails from 'components/users/Details';

const users = new UserActions();
const teams = new TeamActions();

const stateToProps = (state, props) => ({
  users: state.users.dataset,
  teams: state.teams.dataset,
});

const dispToProps = disp => ({
  getUserDetails: (userId, callback) =>
    disp(users.getUserDetails(userId, callback)),
  getUserList: (filters, callback) =>
    disp(users.getUserList(filters, callback)),
  getTeamList: (filters, callback) =>
    disp(teams.getTeamList(filters, callback)),
  saveUser: (user, callback) =>
    disp(users.saveUser(user, callback)),
  setUser: (userId, user, callback) =>
    disp(users.setUser(userId, user, callback)),
  deleteUser: (userId, callback) =>
    disp(users.deleteUser(userId, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(UserDetails));
