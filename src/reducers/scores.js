/*
__Seed builder__v1.0
*/

import _Scores from '__seed__/reducers/scores'

class Scores extends _Scores
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  }
}

export default Scores;
