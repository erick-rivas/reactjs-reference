/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { combineReducers } from 'redux';

import Users from 'reducers/users';
import Teams from 'reducers/teams';
import Players from 'reducers/players';
import Matches from 'reducers/matches';
import Scores from 'reducers/scores';

class _Combiner
{
  additionalReducers = {};
  
  combine()
  {
    let defReducers = {
      users: new Users().reducer,
      teams: new Teams().reducer,
      players: new Players().reducer,
      matches: new Matches().reducer,
      scores: new Scores().reducer,
    } 
    const reducers = Object.assign(defReducers, this.additionalReducers);
    return combineReducers(reducers);
  }
}

export default _Combiner;