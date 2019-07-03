/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Actions from 'interactors/actions/stats/scores';
import Reducer from 'interactors/reducers/helpers/reducer';

class _Scores extends Reducer
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Scores;