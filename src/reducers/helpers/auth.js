import Actions from 'actions/helpers/auth'
import Executor from 'reducers/helpers/executor'

class Canvas extends Executor
{
  constructor()
  {
    super(new Actions());
  }

  reducer = (state, action) =>
  {
    const type = action.type;
    if (type === `AUTH_LOGGED`) {
      console.log(action);
      return Object.assign({}, state, {
        logged: action.logged
      });
    }

    return this.baseReducer(state, action);
  }
}

export default Canvas;