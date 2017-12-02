import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_TIMER, UPDATE_TIMER } from '../actions/types'

export default function (state = { tasks: [], activeTaskFlag: false }, act) {
  const action = !(act) ? { type: 'undefined', payload: '' } : act
  let newTasks = [...state.tasks]
  let activeTaskFlag
  switch (action.type) {
    case ADD_TODO:
      return { ...state, tasks: [...newTasks, action.todo] }
    case DELETE_TODO:
      return { ...state, tasks: [...state.tasks.filter(({ id }) => id !== action.id)] }
    case TOGGLE_TODO:
      newTasks = state.tasks.map((todo) => {
        if (todo.id === action.id) return { ...todo, completed: !todo.completed }
        return todo
      })
      return { ...state, tasks: newTasks }
    case TOGGLE_TIMER:
      newTasks = state.tasks.map((todo) => {
        if (todo.id === action.id) {
          activeTaskFlag = !todo.timerStarted
          return { ...todo, timerStarted: !todo.timerStarted }
        }
        return todo
      })
      return { ...state, tasks: newTasks, activeTask: activeTaskFlag }
    case UPDATE_TIMER:
      newTasks = state.tasks.map((todo) => {
        if (todo.id === action.id) return { ...todo, timerStarted: action.timerStarted, timeSpent: action.timeSpent }
        return todo
      })
      return { ...state, tasks: newTasks }
    default:
      return state
  }
}
