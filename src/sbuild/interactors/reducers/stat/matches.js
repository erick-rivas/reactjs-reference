/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Actions from 'interactors/actions/stat/matches';
import Reducer from 'interactors/reducers/helpers/reducer';

class _Matches extends Reducer
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Matches;
