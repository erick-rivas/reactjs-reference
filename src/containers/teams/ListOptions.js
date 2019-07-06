/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams';
import PlayerActions from 'actions/players';

import TeamListOptions from 'components/teams/ListOptions';

const teams = new TeamActions();
const players = new PlayerActions();

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
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(TeamListOptions));

