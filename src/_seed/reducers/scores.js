/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import Actions from 'actions/scores';
import Executor from 'reducers/helpers/executor';

class _Scores extends Executor
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Scores;