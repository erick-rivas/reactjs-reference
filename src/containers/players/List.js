/*
__Seed builder__v1.0

  attributes:
    - players
    - teams

  methods:
    - getPlayerDetails(playerId, callback)
    - getPlayerList(filters, callback)
    - getTeamList(filters, callback)
    - savePlayer(player, callback)
    - setPlayer(playerId, player, callback)
    - deletePlayer: (playerId, callback)
*/

import _PlayerList from '_seed/containers/players/List';

class PlayerList extends _PlayerList
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new PlayerList().getRouter()
