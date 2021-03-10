/*
__Seed builder__v0.2.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import { combineReducers } from "redux";

import Matches from "seed/redux/reducers/matches";
import Players from "seed/redux/reducers/players";
import PlayerPositions from "seed/redux/reducers/playerPositions";
import Scores from "seed/redux/reducers/scores";
import Teams from "seed/redux/reducers/teams";
import Users from "seed/redux/reducers/users";
import Auth from "seed/redux/reducers/helpers/auth";

const reducers = {
  auth: new Auth().reducer,
  matches: new Matches().reducer,
  players: new Players().reducer,
  playerPositions: new PlayerPositions().reducer,
  scores: new Scores().reducer,
  teams: new Teams().reducer,
  users: new Users().reducer,
};

export default combineReducers(reducers);