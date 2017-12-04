
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TIMER } from '../../src/actions/types'
import { addTodo, deleteTodo, toggleTodo, updateTimer } from '../../src/actions/index'

describe('actions', () => {
  describe('addTodo', () => {
    it('has the correct type', () => {
      const action = addTodo()
      expect(action.type).toEqual(ADD_TODO)
    })

    it('has the correct payload', () => {
      const action = addTodo({ id: 'aabbcc', text: 'some text', completed: false })
      expect(action.todo).toEqual({ id: 'aabbcc', text: 'some text', completed: false })
    })
  })

  describe('deleteTodo', () => {
    it('has the correct type', () => {
      const action = deleteTodo()
      expect(action.type).toEqual(DELETE_TODO)
    })

    it('has the correct payload', () => {
      const action = deleteTodo('1')
      expect(action.id).toEqual('1')
    })
  })

  describe('toggleTodo', () => {
    it('has the correct type', () => {
      const action = toggleTodo()
      expect(action.type).toEqual(TOGGLE_TODO)
    })

    it('has the correct payload', () => {
      const action = toggleTodo('1')
      expect(action.id).toEqual('1')
    })
  })

  describe('updateTimer', () => {
    it('has the correct type', () => {
      const action = updateTimer()
      expect(action.type).toEqual(UPDATE_TIMER)
    })

    it('has the correct payload', () => {
      const action = updateTimer('22', 345, 888)
      expect(action).toEqual({
        type: UPDATE_TIMER,
        id: '22',
        timerStarted: 345,
        timeSpent: 888,
      })
    })
  })
})
