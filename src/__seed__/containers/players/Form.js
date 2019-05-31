/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PlayerActions from 'actions/players'
import TeamActions from 'actions/teams'

import PlayerForm from 'components/players/Form'

class _PlayerForm
{
  players = new PlayerActions();
  teams = new TeamActions();

  _states = (state, props) => ({
      user: state.auth.user,
      players: state.players.dataset,
      teams: state.teams.dataset,
  });

  _disps = disp => ({
    getPlayerDetails: playerId =>
      disp(this.players.getPlayerDetails(playerId)),
    getTeamList: filters =>
      disp(this.teams.getTeamList(filters)),
    savePlayer: (player, callback) =>
      disp(this.players.savePlayer(player, callback)),
    setPlayer: (playerId, player, callback) =>
      disp(this.players.setPlayer(playerId, player, callback)),
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
    )(PlayerForm));
}

export default _PlayerForm;
