/*
__Seed builder__v0.2.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import Action from "seed/helpers/action";

class _PlayerPositions extends Action {
  constructor(fetch) {
    if (fetch == null)
      fetch = [
      ];

    super(
      "PLAYER_POSITIONS",
      "player_positions",
      (state) => state.playerPositions,
      fetch
    );
  }

  getPlayerPositionList(params = {}, callback) {
    return this.getList("", params, callback);
  }

  getPlayerPositionDetails(playerPositionId, callback) {
    return this.getDetails("", playerPositionId, callback);
  }

  savePlayerPosition(playerPosition, callback) {
    return this.postData("", playerPosition, callback);
  }

  setPlayerPosition(playerPositionId, playerPosition, callback) {
    return this.putData("", playerPositionId, playerPosition, callback);
  }

  deletePlayerPosition(playerPositionId, callback) {
    return this.deleteData("", playerPositionId, callback);
  }
}

export default _PlayerPositions;