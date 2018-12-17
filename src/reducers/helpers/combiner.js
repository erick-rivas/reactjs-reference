import { combineReducers } from 'redux'

import Pets from 'reducers/pets'
import Toys from 'reducers/toys'

export default combineReducers({
  pets: new Pets().reducer,
  toys: new Toys().reducer
});