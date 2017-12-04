import todosReducer from '../../src/reducers/todos'
import todos from '../fixtures/todos'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../src/actions/types'

test('should set default state', () => {
  const state = todosReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    activeTaskFlag: false,
    tasks: [],
  })
})

test('should remove todo by id', () => {
  const action = {
    type: DELETE_TODO,
    id: todos.tasks[1].id,
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual({ ...state, tasks: [todos.tasks[0], todos.tasks[2]] })
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
  expect(state).toEqual({ ...state, tasks: [...todos.tasks, todo] })
})


test('toggle todo', () => {
  const action = {
    type: TOGGLE_TODO,
    id: todos.tasks[1].id,
  }
  const state = todosReducer(todos, action)
  expect(state.tasks[1].completed).toEqual(!todos.tasks[1].completed)
})
