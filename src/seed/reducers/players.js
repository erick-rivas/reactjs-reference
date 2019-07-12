/*
__Seed builder__v1.0
*/

import Actions from 'actions/players';
import Reducer from 'seed/helpers/reducer';

class _Players extends Reducer
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

export default _Players;
