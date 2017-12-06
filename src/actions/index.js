import uuid from 'uuid'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TIMER } from './types'


const addTodo = (todo) => {
  return ({
    type: ADD_TODO,
    todo: {
      id: uuid(),
      ...todo,
    },
  })
}

const deleteTodo = (index) => {
  return ({
    type: DELETE_TODO,
    id: index,
  })
}

const toggleTodo = (index) => {
  return ({
    type: TOGGLE_TODO,
    id: index,
  })
}

const updateTimer = (index, timerStarted, timeSpent) => {
  return ({
    type: UPDATE_TIMER,
    id: index,
    timerStarted: timerStarted, 
    timeSpent: timeSpent,
  })
}

export { addTodo, deleteTodo, toggleTodo, updateTimer }
