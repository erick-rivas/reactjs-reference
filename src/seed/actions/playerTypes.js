/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from 'seed/helpers/action';

class _PlayerTypes extends Action
{
  constructor(fetch)
  {
    if (fetch == null)
      fetch = [
      ];

    super(
      `PLAYER_TYPES`,
      `player_types`,
      state => state.playerTypes,
      fetch
    )
  }

  getPlayerTypeList(params = {}, callback)
  {
    return this.getList('', params, callback);
  }

  getPlayerTypeDetails(playerTypeId, callback)
  {
    return this.getDetails('', playerTypeId, callback);
  }

  savePlayerType(playerType, callback)
  {
    return this.postData('', playerType, callback);
  }

  setPlayerType(playerTypeId, playerType, callback)
  {
    return this.putData('', playerTypeId, playerType, callback);
  }

  deletePlayerType(playerTypeId, callback)
  {
    return this.deleteData('', playerTypeId, callback);
  }
}

export default _PlayerTypes;
