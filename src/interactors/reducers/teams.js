/*
__Seed builder__v1.0
  
  Guidelines:
    - Modify reducers via SeedManifest.yaml
    - Only add temporary action if required

  Actions:
    - <id>_GET_LIST
    - <id>_GET_DETAILS
    - <id>_SAVE
    - <id>_SET
    - <id>_DELETE
    - <id>_RESTART
*/

import _Teams from '_seed/interactors/reducers/teams';

class Teams extends _Teams
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  };
}

export default Teams;
