/*
__Seed builder__v1.0
*/

import Actions from 'actions/matches';
import Reducer from 'seed/helpers/reducer';

class _Matches extends Reducer
{
  constructor()
  {
    super(new Actions());
  }

  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  };
}

export default _Matches;
