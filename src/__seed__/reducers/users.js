/*
__Seed builder__v1.0
*/

import Actions from 'actions/users'
import Executor from 'reducers/helpers/executor'

class _Users extends Executor
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Users;
