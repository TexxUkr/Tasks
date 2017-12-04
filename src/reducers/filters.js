import { SET_ALL_FILTER, SET_UNCOMPLETED_FILTER, SET_COMPLETED_FILTER } from '../actions/types'

const filtersReducerDefaultState = {
  showByStatus: 'ALL',
}

export default (state = filtersReducerDefaultState, action) => {
  if (process.env.NODE_ENV !== 'production') console.info('filter reducer is here', action)
  switch (action.type) {
    case SET_COMPLETED_FILTER:
      return {
        ...state,
        showByStatus: 'COMPLETED',
      }
    case SET_UNCOMPLETED_FILTER:
      return {
        ...state,
        showByStatus: 'UNCOMPLETED',
      }
    case SET_ALL_FILTER:
      return {
        ...state,
        showByStatus: 'ALL',
      }
    default:
      return state
  }
}
