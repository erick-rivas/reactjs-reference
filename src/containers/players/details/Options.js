/*
__Seed builder__v1.0

  Guidelines:
    - Modify default methods & attributes via SeedManifest.yaml
    - Include extra states & props according to current models or ACTIONS
      - Example getTopPlayers()

  Default attributes:
    - players
    - teams

  Default methods:
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
