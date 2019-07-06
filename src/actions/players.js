/*
__Seed builder__v1.0

  Guidelines:
    - Modify methods via SeedManifest.yaml
    - Only override existing methods if required

  Default methods:
    - getPlayerList(filters, callback)
    - getPlayerDetails(playerId, callback)
    - savePlayer(player, callback)
    - setPlayer(playerId, player, callback)
    - deletePlayer(playerId, callback)

  Request methods:
    - request(path, toDisp, callback, method = "GET", body = {})
      - Use this parent method to call new actions
*/

import _Players from 'sbuild/actions/players';

class Players extends _Players {}

export default Players;
