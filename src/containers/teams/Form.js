/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams';
import PlayerActions from 'actions/players';
import FileActions from 'actions/helpers/files';

import TeamForm from 'components/teams/Form';

const teams = new TeamActions();
const players = new PlayerActions();
const files = new FileActions();

const stateToProps = (state, props) => ({
  teams: state.teams.dataset,
  players: state.players.dataset,
});

const dispToProps = disp => ({
  getTeamDetails: (teamId, callback) =>
    disp(teams.getTeamDetails(teamId, callback)),
  getTeamList: (params, callback) =>
    disp(teams.getTeamList(params, callback)),
  getPlayerList: (params, callback) =>
    disp(players.getPlayerList(params, callback)),
  saveTeam: (team, callback) =>
    disp(teams.saveTeam(team, callback)),
  setTeam: (teamId, team, callback) =>
    disp(teams.setTeam(teamId, team, callback)),
  deleteTeam: (teamId, callback) =>
    disp(teams.deleteTeam(teamId, callback)),
  uploadFile: (formWrapper, callback) =>
    disp(files.uploadFile(formWrapper, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(TeamForm));
