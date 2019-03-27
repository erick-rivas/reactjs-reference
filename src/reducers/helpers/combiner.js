import { combineReducers } from 'redux'

import Players from 'reducers/players'
import Teams from 'reducers/teams'

export default combineReducers({
  players: new Players().reducer,
  teams: new Teams().reducer
});