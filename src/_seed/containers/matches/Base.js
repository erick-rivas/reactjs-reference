/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import MatchActions from 'actions/matches';
import TeamActions from 'actions/teams';
import ScoreActions from 'actions/scores';

class _MatchBase
{
  matches = new MatchActions();
  teams = new TeamActions();
  scores = new ScoreActions();

  _baseStates = (state, props) => ({
      matches: state.matches.dataset,
      teams: state.teams.dataset,
      scores: state.scores.dataset,
  });

  _baseDisps = disp => ({
    getMatchDetails: (matchId, callback) =>
      disp(this.matches.getMatchDetails(matchId, callback)),
    getMatchList: (filters, callback) =>
      disp(this.matches.getMatchList(filters, callback)),
    getTeamList: (filters, callback) =>
      disp(this.teams.getTeamList(filters, callback)),
    getScoreList: (filters, callback) =>
      disp(this.scores.getScoreList(filters, callback)),
    saveMatch: (match, callback) =>
      disp(this.matches.saveMatch(match, callback)),
    setMatch: (matchId, match, callback) =>
      disp(this.matches.setMatch(matchId, match, callback)),
    deleteMatch: (matchId, callback) =>
      disp(this.matches.deleteMatch(matchId, callback)),
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

export default _MatchBase;

