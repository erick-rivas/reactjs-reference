/*
__Seed builder__v1.0
*/

import Executor from 'actions/helpers/executor'

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

  getPlayerList = (filters = {}) =>
  {
    let params = '';
    for (let filter in filters) 
      params += `{filter}=${filters[filter]}&`;
    return this.getList(`${params}`);
  }

  getPlayerDetails = playerId =>
  {
    return this.getDetails(playerId);
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
