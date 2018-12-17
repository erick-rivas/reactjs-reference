import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from 'reducers/helpers/combiner'

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState)
{
  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return store;
}