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

import _PlayerForm from '_seed/containers/players/Form';

class PlayerForm extends _PlayerForm
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new PlayerForm().getRouter()
