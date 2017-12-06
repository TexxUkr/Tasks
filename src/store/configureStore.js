import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers/index'

export default () => {
  const store = createStore(
    reducers,
    ((process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined),
    applyMiddleware(process.env.NODE_ENV !== 'production' ? logger : () => next => action => next(action)),
  )
  return store
}
