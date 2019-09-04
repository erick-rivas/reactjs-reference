/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import { combineReducers } from 'redux';

import Matches from 'seed/reducers/matches';
import Players from 'seed/reducers/players';
import Scores from 'seed/reducers/scores';
import Teams from 'seed/reducers/teams';
import Users from 'seed/reducers/users';
import Auth from 'seed/reducers/helpers/auth';

const reducers = {
  auth: new Auth().reducer,
  matches: new Matches().reducer,
  players: new Players().reducer,
  scores: new Scores().reducer,
  teams: new Teams().reducer,
  users: new Users().reducer,
} 

export default combineReducers(reducers); 

