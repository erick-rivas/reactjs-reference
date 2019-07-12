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
