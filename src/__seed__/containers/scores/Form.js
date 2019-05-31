/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ScoreActions from 'actions/scores'
import PlayerActions from 'actions/players'
import MatchActions from 'actions/matches'

import ScoreForm from 'components/scores/Form'

class _ScoreForm
{
  scores = new ScoreActions();
  players = new PlayerActions();
  matches = new MatchActions();

  _states = (state, props) => ({
      user: state.auth.user,
      scores: state.scores.dataset,
      players: state.players.dataset,
      matches: state.matches.dataset,
  });

  _disps = disp => ({
    getScoreDetails: scoreId =>
      disp(this.scores.getScoreDetails(scoreId)),
    getPlayerList: filters =>
      disp(this.players.getPlayerList(filters)),
    getMatchList: filters =>
      disp(this.matches.getMatchList(filters)),
    saveScore: (score, callback) =>
      disp(this.scores.saveScore(score, callback)),
    setScore: (scoreId, score, callback) =>
      disp(this.scores.setScore(scoreId, score, callback)),
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
    )(ScoreForm));
}

export default _ScoreForm;