/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Actions from 'interactors/actions/players';
import Reducer from 'interactors/reducers/helpers/reducer';

class _Players extends Reducer
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Players;
