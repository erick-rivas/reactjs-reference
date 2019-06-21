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

import _PlayerDetailsOptions from '_seed/containers/players/details/Options';

class PlayerDetailsOptions extends _PlayerDetailsOptions
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new PlayerDetailsOptions().getRouter()
