import uuid from 'uuid'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_TIMER, UPDATE_TIMER } from './types'


const addTodo = (todo) => {
  if (process.env.NODE_ENV !== 'production') console.info('dispatcher add todo has been called')
  return ({
    type: ADD_TODO,
    todo: {
      id: uuid(),
      ...todo,
    },
  })
}

const deleteTodo = (index) => {
  if (process.env.NODE_ENV !== 'production') console.info('dispatcher delete todo has been called', index)
  return ({
    type: DELETE_TODO,
    id: index,
  })
}

const toggleTodo = (index) => {
  if (process.env.NODE_ENV !== 'production') console.info('dispatcher toggle todo has been called', index)
  return ({
    type: TOGGLE_TODO,
    id: index,
  })
}

const toggleTimer = (index) => {
  if (process.env.NODE_ENV !== 'production') console.info('dispatcher toggle timer has been called', index)
  return ({
    type: TOGGLE_TIMER,
    id: index,
  })
}

const updateTimer = (index, timerStarted, timeSpent) => {
  if (process.env.NODE_ENV !== 'production') console.info('dispatcher update timer has been called', index)
  return ({
    type: UPDATE_TIMER,
    id: index,
    timerStarted: timerStarted, 
    timeSpent: timeSpent,
  })
}

export { addTodo, deleteTodo, toggleTodo, toggleTimer, updateTimer }
