import { combineReducers } from 'redux'
import todosReducer from './todos'
import filterReducer from './filters'

const rootReducer = combineReducers({
  todos: todosReducer, filters: filterReducer,
})

export default rootReducer
