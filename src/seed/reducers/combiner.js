/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import { combineReducers } from 'redux';

import Players from 'seed/reducers/players';
import Teams from 'seed/reducers/teams';
import Users from 'seed/reducers/users';
import Matches from 'seed/reducers/matches';
import Scores from 'seed/reducers/scores';
import Auth from 'seed/reducers/helpers/auth';

const reducers = {
  auth: new Auth().reducer,
  players: new Players().reducer,
  teams: new Teams().reducer,
  users: new Users().reducer,
  matches: new Matches().reducer,
  scores: new Scores().reducer,
} 

export default combineReducers(reducers); 

