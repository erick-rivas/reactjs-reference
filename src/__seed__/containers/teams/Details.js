/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams'
import PlayerActions from 'actions/players'

import TeamDetails from 'components/teams/Details'

class _TeamDetails
{
  teams = new TeamActions();
  players = new PlayerActions();

  _states = (state, props) => ({
    user: state.auth.user,
    teams: state.teams.dataset,
    players: state.players.dataset,
  });
  
  _disps = disp => ({
    getTeamDetails: teamId =>
      disp(this.teams.getTeamDetails(teamId)),
    getPlayerList: filters =>
      disp(this.players.getPlayerList(filters)),
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
    )(TeamDetails));
}

export default _TeamDetails;
