/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as Util from 'seed/util'
import defs from 'actions/defs'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import _MatchActions from 'seed/actions/matches';
import _PlayerActions from 'seed/actions/players';
import _PlayerTypeActions from 'seed/actions/playerTypes';
import _ScoreActions from 'seed/actions/scores';
import _TeamActions from 'seed/actions/teams';
import _UserActions from 'seed/actions/users';
import UserActions from 'actions/users';
import TeamActions from 'actions/teams';
import PlayerActions from 'actions/players';
import MatchActions from 'actions/matches';
import ScoreActions from 'actions/scores';
import PlayerTypeActions from 'actions/playerTypes';
import AuthActions from 'seed/actions/helpers/auth'
import FileActions from 'seed/helpers/files';
const matches = new MatchActions();
const players = new PlayerActions();
const playerTypes = new PlayerTypeActions();
const scores = new ScoreActions();
const teams = new TeamActions();
const users = new UserActions();
const auth = new AuthActions();
const files = new FileActions();

const actions = [
  {
    className: _MatchActions,
    object: matches
  },
  {
    className: _PlayerActions,
    object: players
  },
  {
    className: _PlayerTypeActions,
    object: playerTypes
  },
  {
    className: _ScoreActions,
    object: scores
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
    className: UserActions,
    object: users
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
    className: MatchActions,
    object: matches
  },
  {
    className: ScoreActions,
    object: scores
  },
  {
    className: PlayerTypeActions,
    object: playerTypes
  },
  {
    className: AuthActions,
    object: auth
  },
  {
    className: FileActions,
    object: files
  },
  ...defs
]

const stateToProps = (state, props) => ({
  matches: state.matches.dataset,
  players: state.players.dataset,
  playerTypes: state.playerTypes.dataset,
  scores: state.scores.dataset,
  teams: state.teams.dataset,
  users: state.users.dataset,
});

const dispToProps = disp => {
  let res = {}
  for (let action of actions){
    let methods = Object.getOwnPropertyNames(action.className.prototype) 
    for (let method of methods)
      if (method != "constructor")
        res[method] = (...args) => disp(action.object[method](...args));
  }
  return res;
};

const mergeProps = (states, disps, props) => {
  return Object.assign({}, states, disps, props)
};

const redux = component =>
  withRouter(connect(
    stateToProps,
    dispToProps,
    mergeProps
  )(component));
export default redux;

