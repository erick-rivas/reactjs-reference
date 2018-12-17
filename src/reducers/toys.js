import Actions from 'actions/toys'
import Executor from 'reducers/helpers/executor'

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