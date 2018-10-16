import Actions from 'actions/_toys'
import Executor from 'reducers/executor'

class Toys extends Executor
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

export default Toys;