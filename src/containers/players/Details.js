/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PlayerActions from 'actions/players';
import TeamActions from 'actions/teams';

import PlayerDetails from 'components/players/Details';

const players = new PlayerActions();
const teams = new TeamActions();

const stateToProps = (state, props) => ({
  players: state.players.dataset,
  teams: state.teams.dataset,
});

const dispToProps = disp => ({
  getPlayerDetails: (playerId, callback) =>
    disp(players.getPlayerDetails(playerId, callback)),
  getPlayerList: (params, callback) =>
    disp(players.getPlayerList(params, callback)),
  getTeamList: (params, callback) =>
    disp(teams.getTeamList(params, callback)),
  savePlayer: (player, callback) =>
    disp(players.savePlayer(player, callback)),
  setPlayer: (playerId, player, callback) =>
    disp(players.setPlayer(playerId, player, callback)),
  deletePlayer: (playerId, callback) =>
    disp(players.deletePlayer(playerId, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(PlayerDetails));
