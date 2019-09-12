/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/
import Actions from 'actions/playerTypes';

import Reducer from 'seed/helpers/reducer';

class _PlayerTypes extends Reducer
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

export default _PlayerTypes;
