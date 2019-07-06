/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ScoreActions from 'actions/stats/scores';
import PlayerActions from 'actions/players';
import MatchActions from 'actions/stats/matches';

import ScoreDetailsOptions from 'components/stats/scores/DetailsOptions';

const scores = new ScoreActions();
const players = new PlayerActions();
const matches = new MatchActions();

const stateToProps = (state, props) => ({
  scores: state.scores.dataset,
  players: state.players.dataset,
  matches: state.matches.dataset,
});

const dispToProps = disp => ({
  getScoreDetails: (scoreId, callback) =>
    disp(scores.getScoreDetails(scoreId, callback)),
  getScoreList: (params, callback) =>
    disp(scores.getScoreList(params, callback)),
  getPlayerList: (params, callback) =>
    disp(players.getPlayerList(params, callback)),
  getMatchList: (params, callback) =>
    disp(matches.getMatchList(params, callback)),
  saveScore: (score, callback) =>
    disp(scores.saveScore(score, callback)),
  setScore: (scoreId, score, callback) =>
    disp(scores.setScore(scoreId, score, callback)),
  deleteScore: (scoreId, callback) =>
    disp(scores.deleteScore(scoreId, callback)),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(ScoreDetailsOptions));
