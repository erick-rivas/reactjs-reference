/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import UserActions from 'actions/users'
import TeamActions from 'actions/teams'

import UserDetails from 'components/users/Details'

class _UserDetails
{
  users = new UserActions();
  teams = new TeamActions();

  _states = (state, props) => ({
    user: state.auth.user,
    users: state.users.dataset,
    teams: state.teams.dataset,
  });
  
  _disps = disp => ({
    getUserDetails: userId =>
      disp(this.users.getUserDetails(userId)),
    getTeamList: filters =>
      disp(this.teams.getTeamList(filters)),
  })

  states = state => ({});
  disps = disp => ({});

  dispToProps = (disp, props) => ({
    ...this._disps(disp, props), ...this.disps(disp, props)
  });

  stateToProps = (state, props) => ({
    ...this._states(state, props), ...this.states(state, props)
  });

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(UserDetails));
}

export default _UserDetails;
