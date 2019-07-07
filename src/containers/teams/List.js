/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams';
import PlayerActions from 'actions/players';

import TeamList from 'components/teams/List';

const teams = new TeamActions();
const players = new PlayerActions();

const stateToProps = (state, props) => ({
  teams: state.teams.dataset,
  players: state.players.dataset,
});

const dispToProps = disp => ({
  getTeamDetails: (teamId, callback) =>
    disp(teams.getTeamDetails(teamId, callback)),
  getTeamList: (filters, callback) =>
    disp(teams.getTeamList(filters, callback)),
  getPlayerList: (filters, callback) =>
    disp(players.getPlayerList(filters, callback)),
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
)(TeamList));
