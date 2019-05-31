/*
__Seed builder__v1.0
*/

import _Players from '__seed__/reducers/players'

class Players extends _Players
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  }
}

export default Players;
