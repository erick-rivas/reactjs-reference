/*
__Seed builder__v1.0
*/

import _MatchDelete from '__seed__/containers/matches/Delete';

class MatchDelete extends _MatchDelete
{
  states = state => ({
  });

  disps = disp => ({
  })
}

export default new MatchDelete().getRouter()
