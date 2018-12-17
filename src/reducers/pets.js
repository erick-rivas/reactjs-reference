import Actions from 'actions/pets'
import Executor from 'reducers/helpers/executor'

class Pets extends Executor
{
  constructor()
  {
    super(new Actions());
  }

  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  }
}

export default Pets;