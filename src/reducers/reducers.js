import { combineReducers } from 'redux'

import Pets from 'reducers/_pets'
import Toys from 'reducers/_toys'

export default combineReducers({
  pets: new Pets().reducer,
  toys: new Toys().reducer
});