/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import Actions from 'actions/teams';
import Executor from 'reducers/helpers/executor';

class _Teams extends Executor
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Teams;
