/*
__Seed builder__v1.0
  
  Guidelines:
    - Modify reducers via models.json
    - Only add temporary action if required

  Actions:
    - <id>_GET_LIST
    - <id>_GET_DETAILS
    - <id>_SAVE
    - <id>_SET
    - <id>_DELETE
    - <id>_RESTART
*/

import _Players from '_seed/reducers/players';

class Players extends _Players
{
  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  };
}

export default Players;
