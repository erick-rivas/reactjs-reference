/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import Executor from 'actions/helpers/executor';

class _Players extends Executor
{
  constructor()
  {
    super(
      `PLAYERS`,
      `players`,
      state => state.players
    )
  }

  getPlayerList = (filters = {}, callback) =>
  {
    let params = '';
    for (let filter in filters) 
      if (filters[filter] != null)
        params += `${filter}=${filters[filter]}&`;
    return this.getList(`${params}`, callback);
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
