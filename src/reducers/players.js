import Actions from 'actions/players'
import Executor from 'reducers/helpers/executor'

class Players extends Executor
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

export default Players;