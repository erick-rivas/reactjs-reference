/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PlayerActions from 'actions/players';
import TeamActions from 'actions/teams';
import FileActions from 'sbuild/helpers/files';

import PlayerForm from 'components/players/Form';

const players = new PlayerActions();
const teams = new TeamActions();
const files = new FileActions();

const stateToProps = (state, props) => ({
  players: state.players.dataset,
  teams: state.teams.dataset,
});

const dispToProps = disp => ({
  getPlayerDetails: (playerId, callback) =>
    disp(players.getPlayerDetails(playerId, callback)),
  getPlayerList: (filters, callback) =>
    disp(players.getPlayerList(filters, callback)),
  getTeamList: (filters, callback) =>
    disp(teams.getTeamList(filters, callback)),
  savePlayer: (player, callback) =>
    disp(players.savePlayer(player, callback)),
  setPlayer: (playerId, player, callback) =>
    disp(players.setPlayer(playerId, player, callback)),
  deletePlayer: (playerId, callback) =>
    disp(players.deletePlayer(playerId, callback)),
  uploadFile: (formWrapper, callback) =>
    disp(files.uploadFile(formWrapper, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(PlayerForm));
