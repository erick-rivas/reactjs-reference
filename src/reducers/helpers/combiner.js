import { combineReducers } from 'redux'

import Auth from 'reducers/auth'
import Players from 'reducers/players'
import Teams from 'reducers/teams'

export default combineReducers({
  auth: new Auth().reducer,
  players: new Players().reducer,
  teams: new Teams().reducer
});