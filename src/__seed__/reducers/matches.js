/*
__Seed builder__v1.0
*/

import Actions from 'actions/matches'
import Executor from 'reducers/helpers/executor'

class _Matches extends Executor
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Matches;
