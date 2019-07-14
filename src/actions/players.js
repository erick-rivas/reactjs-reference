/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via builder
    - Modify fetch data
    - Only override existing methods if required

  Base methods:
    - getPlayerList(filters, callback)
    - getPlayerDetails(playerId, callback)
    - savePlayer(player, callback)
    - setPlayer(playerId, player, callback)
    - deletePlayer(playerId, callback)

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

import _Players from 'seed/actions/players';

class Players extends _Players 
{
  constructor()
  {
    const fetch = [
      "team.*",
    ]
    super(fetch)
  }
}

export default Players;