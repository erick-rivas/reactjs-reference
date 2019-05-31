/*
__Seed builder__v1.0
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MatchActions from 'actions/matches'
import TeamActions from 'actions/teams'
import ScoreActions from 'actions/scores'

import MatchForm from 'components/matches/Form'

class _MatchForm
{
  matches = new MatchActions();
  teams = new TeamActions();
  scores = new ScoreActions();

  _states = (state, props) => ({
      user: state.auth.user,
      matches: state.matches.dataset,
      teams: state.teams.dataset,
      scores: state.scores.dataset,
  });

  _disps = disp => ({
    getMatchDetails: matchId =>
      disp(this.matches.getMatchDetails(matchId)),
    getTeamList: filters =>
      disp(this.teams.getTeamList(filters)),
    getScoreList: filters =>
      disp(this.scores.getScoreList(filters)),
    saveMatch: (match, callback) =>
      disp(this.matches.saveMatch(match, callback)),
    setMatch: (matchId, match, callback) =>
      disp(this.matches.setMatch(matchId, match, callback)),
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
    )(MatchForm));
}

export default _MatchForm;
