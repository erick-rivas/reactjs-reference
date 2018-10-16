import Actions from 'actions/_pets'
import Executor from 'reducers/executor'

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