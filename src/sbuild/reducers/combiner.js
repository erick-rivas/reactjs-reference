/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { combineReducers } from 'redux';

import Players from 'reducers/players';
import Teams from 'reducers/teams';
import Users from 'reducers/users';
import Matches from 'reducers/stats/matches';
import Scores from 'reducers/stats/scores';

class _Combiner
{
  additionalReducers = {};
  
  combine()
  {
    let defReducers = {
      players: new Players().reducer,
      teams: new Teams().reducer,
      users: new Users().reducer,
      matches: new Matches().reducer,
      scores: new Scores().reducer,
    } 
    const reducers = Object.assign(defReducers, this.additionalReducers);
    return combineReducers(reducers);
  }
}

export default _Combiner;

