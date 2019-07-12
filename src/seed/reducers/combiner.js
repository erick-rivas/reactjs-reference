/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
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

