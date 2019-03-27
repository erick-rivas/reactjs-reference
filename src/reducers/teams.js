import Actions from 'actions/teams'
import Executor from 'reducers/helpers/executor'

class Teams extends Executor
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

export default Teams;