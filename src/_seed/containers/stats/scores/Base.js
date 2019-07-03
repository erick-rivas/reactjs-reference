/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import ScoreActions from 'interactors/actions/stats/scores';
import PlayerActions from 'interactors/actions/players';
import MatchActions from 'interactors/actions/stats/matches';

class _ScoreBase
{
  scores = new ScoreActions();
  players = new PlayerActions();
  matches = new MatchActions();

  _baseStates = (state, props) => ({
      scores: state.scores.dataset,
      players: state.players.dataset,
      matches: state.matches.dataset,
  });

  _baseDisps = disp => ({
    getScoreDetails: (scoreId, callback) =>
      disp(this.scores.getScoreDetails(scoreId, callback)),
    getScoreList: (filters, callback) =>
      disp(this.scores.getScoreList(filters, callback)),
    getPlayerList: (filters, callback) =>
      disp(this.players.getPlayerList(filters, callback)),
    getMatchList: (filters, callback) =>
      disp(this.matches.getMatchList(filters, callback)),
    saveScore: (score, callback) =>
      disp(this.scores.saveScore(score, callback)),
    setScore: (scoreId, score, callback) =>
      disp(this.scores.setScore(scoreId, score, callback)),
    deleteScore: (scoreId, callback) =>
      disp(this.scores.deleteScore(scoreId, callback)),
  })

  _states = state => ({});
  states = state => ({});

  _disps = disp => ({});
  disps = disp => ({});

  dispToProps = (disp, props) => ({
    ...this._baseDisps(disp,props), ...this._disps(disp, props), ...this.disps(disp, props)
  });

  stateToProps = (state, props) => ({
    ...this._baseStates(state,props), ...this._states(state, props), ...this.states(state, props)
  });
}

export default _ScoreBase;

