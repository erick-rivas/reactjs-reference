/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { combineReducers } from 'redux';

import Players from 'interactors/reducers/players';
import Teams from 'interactors/reducers/teams';
import Users from 'interactors/reducers/users';
import Matches from 'interactors/reducers/stat/matches';
import Scores from 'interactors/reducers/stat/scores';

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
