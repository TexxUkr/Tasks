import todosReducer from '../../src/reducers/todos'
import todos from '../fixtures/todos'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../src/actions/types'

test('should set default state', () => {
  const state = todosReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove todo by id', () => {
  const action = {
    type: DELETE_TODO,
    id: todos[1].id,
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual([todos[0], todos[2]])
})

test('should add todo', () => {
  const todo = {
    id: '1-uiu',
    text: 'added todo',
    complted: false,
  }
  const action = {
    type: ADD_TODO,
    todo: todo,
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual([...todos, todo])
})


test('toggle todo', () => {
  const action = {
    type: TOGGLE_TODO,
    id: todos[1].id,
  }
  const state = todosReducer(todos, action)
  expect(state[1].completed).toEqual(!todos[1].completed)
})
