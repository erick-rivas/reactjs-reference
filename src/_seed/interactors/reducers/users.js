/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import Actions from 'interactors/actions/users';
import Reducer from 'interactors/reducers/helpers/reducer';

class _Users extends Reducer
{
  constructor()
  {
    super(new Actions());
  }
}

export default _Users;
