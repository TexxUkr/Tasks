import todos from '../fixtures/todos'
import { showAllFilter, showCompletedFilter, showUnCompletedFilter } from '../fixtures/filters'
import selector from '../../src/selectors/todos'


test('should return all todos', () => {
  const state = selector(todos, showAllFilter.showByStatus)
  expect(state).toEqual(todos)
})

test('should return completed todos', () => {
  const state = selector(todos, showCompletedFilter.showByStatus)
  expect(state).toEqual([todos[1]])
})

test('should return uncompleted todos', () => {
  const state = selector(todos, showUnCompletedFilter.showByStatus)
  expect(state).toEqual([todos[0], todos[2]])
})
