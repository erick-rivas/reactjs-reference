/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _PlayerActions from 'seed/actions/players';
import _TeamActions from 'seed/actions/teams';
import _UserActions from 'seed/actions/users';
import _MatchActions from 'seed/actions/matches';
import _ScoreActions from 'seed/actions/scores';
import TeamActions from 'actions/teams';
import PlayerActions from 'actions/players';
import AuthActions from 'seed/actions/helpers/auth'
import FileActions from 'seed/helpers/files';
const players = new PlayerActions();
const teams = new TeamActions();
const users = new _UserActions();
const matches = new _MatchActions();
const scores = new _ScoreActions();
const auth = new AuthActions();
const files = new FileActions();

const actions = [
  {
    className: _PlayerActions,
    object: players
  },
  {
    className: _TeamActions,
    object: teams
  },
  {
    className: _UserActions,
    object: users
  },
  {
    className: _MatchActions,
    object: matches
  },
  {
    className: _ScoreActions,
    object: scores
  },
  {
    className: TeamActions,
    object: teams
  },
  {
    className: PlayerActions,
    object: players
  },
  {
    className: AuthActions,
    object: auth
  },
  {
    className: FileActions,
    object: files
  }
]

const stateToProps = (state, props) => ({
  players: state.players.dataset,
  teams: state.teams.dataset,
  users: state.users.dataset,
  matches: state.matches.dataset,
  scores: state.scores.dataset,
});

const dispToProps = disp => {
  let res = {}
  for (let action of actions){
    let methods = Object.getOwnPropertyNames(action.className.prototype) 
    for (let method of methods)
      if (method != "constructor")
        res[method] = (...args) => disp(action.object[method](...args));
  }
  console.log(res);
  return res;
}

const redux = (component) => {
  return withRouter(connect(
    stateToProps,
    dispToProps
  )(component));
}

export default redux;


