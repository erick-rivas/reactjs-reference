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

import _PlayerDetails from '_seed/containers/players/Details';

class PlayerDetails extends _PlayerDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new PlayerDetails().getRouter()
