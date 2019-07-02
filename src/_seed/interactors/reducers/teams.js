/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Actions from 'interactors/actions/teams';
import Reducer from 'interactors/reducers/helpers/reducer';

class _Teams extends Reducer
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Teams;
