import uuid from 'uuid'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types'


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

export { addTodo, deleteTodo, toggleTodo }
