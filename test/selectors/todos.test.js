import todos from '../fixtures/todos'
import { showAllFilter, showCompletedFilter, showUnCompletedFilter } from '../fixtures/filters'
import selector from '../../src/selectors/todos'


test('should return all todos', () => {
  const state = selector(todos.tasks, showAllFilter.showByStatus)
  expect(state).toEqual(todos.tasks)
})

test('should return completed todos', () => {
  const state = selector(todos.tasks, showCompletedFilter.showByStatus)
  expect(state).toEqual([todos.tasks[1]])
})

test('should return uncompleted todos', () => {
  const state = selector(todos.tasks, showUnCompletedFilter.showByStatus)
  expect(state).toEqual([todos.tasks[0], todos.tasks[2]])
})
