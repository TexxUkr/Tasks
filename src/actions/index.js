import uuid from 'uuid'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_TIMER, UPDATE_TIMER } from './types'


const addTodo = (todo) => {
  console.info('dipatcher add todo has been called')
  return ({
    type: ADD_TODO,
    todo: {
      id: uuid(),
      ...todo,
    },
  })
}

const deleteTodo = (index) => {
  console.info('dipatcher delete todo has been called', index)
  return ({
    type: DELETE_TODO,
    id: index,
  })
}

const toggleTodo = (index) => {
  console.info('dipatcher toggle todo has been called', index)
  return ({
    type: TOGGLE_TODO,
    id: index,
  })
}

const toggleTimer = (index) => {
  console.info('dipatcher toggle timer has been called', index)
  return ({
    type: TOGGLE_TIMER,
    id: index,
  })
}

const updateTimer = (index, timerStarted, timeSpent) => {
  console.info('dipatcher update timer has been called', index)
  return ({
    type: UPDATE_TIMER,
    id: index,
    timerStarted: timerStarted, 
    timeSpent: timeSpent,
  })
}

export { addTodo, deleteTodo, toggleTodo, toggleTimer, updateTimer }
