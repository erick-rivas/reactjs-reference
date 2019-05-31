/*
__Seed builder__v1.0
*/

import _PlayerList from '__seed__/containers/players/List';

class PlayerList extends _PlayerList
{
  states = state => ({
  });

  disps = disp => ({
  })
}

export default new PlayerList().getRouter()
