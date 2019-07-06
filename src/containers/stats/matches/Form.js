/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MatchActions from 'actions/stats/matches';
import TeamActions from 'actions/teams';
import ScoreActions from 'actions/stats/scores';
import FileActions from 'actions/helpers/files';

import MatchForm from 'components/stats/matches/Form';

const matches = new MatchActions();
const teams = new TeamActions();
const scores = new ScoreActions();
const files = new FileActions();

const stateToProps = (state, props) => ({
  matches: state.matches.dataset,
  teams: state.teams.dataset,
  scores: state.scores.dataset,
});

const dispToProps = disp => ({
  getMatchDetails: (matchId, callback) =>
    disp(matches.getMatchDetails(matchId, callback)),
  getMatchList: (params, callback) =>
    disp(matches.getMatchList(params, callback)),
  getTeamList: (params, callback) =>
    disp(teams.getTeamList(params, callback)),
  getScoreList: (params, callback) =>
    disp(scores.getScoreList(params, callback)),
  saveMatch: (match, callback) =>
    disp(matches.saveMatch(match, callback)),
  setMatch: (matchId, match, callback) =>
    disp(matches.setMatch(matchId, match, callback)),
  deleteMatch: (matchId, callback) =>
    disp(matches.deleteMatch(matchId, callback)),
  uploadFile: (formWrapper, callback) =>
    disp(files.uploadFile(formWrapper, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(MatchForm));
