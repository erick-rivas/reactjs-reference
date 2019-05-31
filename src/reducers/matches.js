/*
__Seed builder__v1.0
*/

import _Matches from '__seed__/reducers/matches'

class Matches extends _Matches
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  }
}

export default Matches;
