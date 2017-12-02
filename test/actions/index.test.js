
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../../src/actions/types'
import { addTodo, deleteTodo, toggleTodo } from '../../src/actions/index'

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
})
