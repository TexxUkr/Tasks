import { createStore, combineReducers } from 'redux'
import reducers from '../reducers/index'

export default () => {
  let store
  if (process.env.NODE_ENV !== 'production') {
    store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  } else {
    store = createStore(reducers)
  }
  return store
}

