import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/types"

export default function (state = [], act) {
  const action = !(act) ? { type: 'undefined', payload: '' } : act
  let newState = []
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODO:
      return state.filter(({ id }) => id !== action.id)
    case TOGGLE_TODO:
      newState = state.map((todo) => {
        if (todo.id === action.id) return { ...todo, completed: !todo.completed }
        return todo
      })
      return newState
    default:
      return state
  }
}
