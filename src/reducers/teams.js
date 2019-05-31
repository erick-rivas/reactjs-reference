/*
__Seed builder__v1.0
*/

import _Teams from '__seed__/reducers/teams'

class Teams extends _Teams
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  }
}

export default Teams;
