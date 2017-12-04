import { createStore, combineReducers } from 'redux'
import reducers from '../reducers/index'

export default () => {
  const store = createStore(
    reducers,
    ((process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined),
  )
  return store
}

