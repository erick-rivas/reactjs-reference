/*
__Seed builder__v1.0

 Request methods:
    - reqGet(path, query, callback, toDisp)
    - reqPost(path, body, callback, toDisp)
    - reqPut(path, body, callback, toDisp)
    - reqDelete(path, callback,  toDisp)
    - Available disps:
      - onGetList, onGetDetails, onSaveData, onSetData, onDeleteData
    - Example action:
      -  this.reqGet('/top_players', 'team=1', callback, this.onGetDetails)  
*/

import _Scores from 'seed/actions/scores';

class Scores extends _Scores 
{
  constructor()
  {
    const fetch = [
      "player.*",
      "match.*",
    ]
    super(fetch)
  }
}

export default Scores;