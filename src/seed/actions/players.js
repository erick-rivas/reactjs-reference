/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from 'seed/helpers/action';

class _Players extends Action
{
  constructor(fetch)
  {
    if (fetch == null)
      fetch = [
        "team.*",
      ];

    super(
      `PLAYERS`,
      `players`,
      state => state.players,
      fetch
    )
  }

  getPlayerList(params = {}, callback)
  {
    return this.getList('', params, callback);
  }

  getPlayerDetails(playerId, callback)
  {
    return this.getDetails('', playerId, callback);
  }

  savePlayer(player, callback)
  {
    return this.postData('', player, callback);
  }

  setPlayer(playerId, player, callback)
  {
    return this.putData('', playerId, player, callback);
  }

  deletePlayer(playerId, callback)
  {
    return this.deleteData('', playerId, callback);
  }
}

export default _Players;
