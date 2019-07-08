/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Action from 'sbuild/helpers/action';

class _Players extends Action
{
  constructor(fetch)
  {
    super(
      `PLAYERS`,
      `players`,
      state => state.players,
      fetch
    )
  }

  getPlayerList = (params = {}, callback) =>
  {
    return this.getList(params, callback);
  }

  getPlayerDetails = (playerId, callback) =>
  {
    return this.getDetails(playerId, callback);
  }

  savePlayer = (player, callback) =>
  {
    return this.saveData(player, callback);
  }

  setPlayer = (playerId, player, callback) =>
  {
    return this.setData(playerId, player, callback);
  }

  deletePlayer = (playerId, callback) =>
  {
    return this.deleteData(playerId, callback);
  }
}

export default _Players;
