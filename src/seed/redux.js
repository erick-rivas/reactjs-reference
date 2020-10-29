/*
__Seed builder__v0.2.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as Util from "seed/util";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import _MatchActions from "seed/actions/matches";
import _PlayerActions from "seed/actions/players";
import _PlayerPositionActions from "seed/actions/playerPositions";
import _ScoreActions from "seed/actions/scores";
import _TeamActions from "seed/actions/teams";
import _UserActions from "seed/actions/users";
import AuthActions from "seed/actions/helpers/auth";
import FileActions from "seed/helpers/files";
const matches = new _MatchActions();
const players = new _PlayerActions();
const playerPositions = new _PlayerPositionActions();
const scores = new _ScoreActions();
const teams = new _TeamActions();
const users = new _UserActions();
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
    className: _PlayerPositionActions,
    object: playerPositions
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
    className: AuthActions,
    object: auth
  },
  {
    className: FileActions,
    object: files
  },
];

const stateToProps = (state, props) => ({
  matches: state.matches.dataset,
  players: state.players.dataset,
  playerPositions: state.playerPositions.dataset,
  scores: state.scores.dataset,
  teams: state.teams.dataset,
  users: state.users.dataset,
});

const dispToProps = (disp) => {
  let res = {};
  for (let action of actions) {
    let methods = Object.getOwnPropertyNames(action.className.prototype);
    for (let method of methods)
      if (method != "constructor")
        res[method] = (...args) => disp(action.object[method](...args));
  }
  return res;
};

const mergeProps = (states, disps, props) =>
  Object.assign({}, states, disps, props);

const redux = (component) =>
  withRouter(connect(
    stateToProps,
    dispToProps,
    mergeProps
  )(component));

export default redux;