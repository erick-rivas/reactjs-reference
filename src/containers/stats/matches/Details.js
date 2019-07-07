/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MatchActions from 'actions/stats/matches';
import TeamActions from 'actions/teams';
import ScoreActions from 'actions/stats/scores';

import MatchDetails from 'components/stats/matches/Details';

const matches = new MatchActions();
const teams = new TeamActions();
const scores = new ScoreActions();

const stateToProps = (state, props) => ({
  matches: state.matches.dataset,
  teams: state.teams.dataset,
  scores: state.scores.dataset,
});

const dispToProps = disp => ({
  getMatchDetails: (matchId, callback) =>
    disp(matches.getMatchDetails(matchId, callback)),
  getMatchList: (filters, callback) =>
    disp(matches.getMatchList(filters, callback)),
  getTeamList: (filters, callback) =>
    disp(teams.getTeamList(filters, callback)),
  getScoreList: (filters, callback) =>
    disp(scores.getScoreList(filters, callback)),
  saveMatch: (match, callback) =>
    disp(matches.saveMatch(match, callback)),
  setMatch: (matchId, match, callback) =>
    disp(matches.setMatch(matchId, match, callback)),
  deleteMatch: (matchId, callback) =>
    disp(matches.deleteMatch(matchId, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(MatchDetails));
