/*
__Seed builder__v1.0
*/

import _PlayerDetails from '_seed/containers/players/Details';

class PlayerDetails extends _PlayerDetails
{
  states = state => ({
  });

  disps = disp => ({
  });
}

export default new PlayerDetails().getRouter()
