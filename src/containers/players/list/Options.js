/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing states & disp if required

  Attributes:
    - players
    - teams

  Methods:
    - getPlayerDetails(playerId, callback)
    - getPlayerList(filters, callback)
    - getTeamList(filters, callback)
    - savePlayer(player, callback)
    - setPlayer(playerId, player, callback)
    - deletePlayer: (playerId, callback)
*/

import _PlayerListOptions from '_seed/containers/players/list/Options';

class PlayerListOptions extends _PlayerListOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new PlayerListOptions().getRouter()
