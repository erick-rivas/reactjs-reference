/*
__Seed builder__v1.0
  
  Guidelines:
    - Modify reducers via SeedManifest.yaml
    - Only add temporary action if required

  Default actions:
    - <id>_GET_LIST
    - <id>_GET_DETAILS
    - <id>_SAVE
    - <id>_SET
    - <id>_DELETE
    - <id>_RESTART
*/

import Actions from 'actions/teams';
import Reducer from 'sbuild/helpers/reducer';

class _Teams extends Reducer
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

export default _Teams;
