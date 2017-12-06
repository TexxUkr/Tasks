import { SET_ALL_FILTER, SET_UNCOMPLETED_FILTER, SET_COMPLETED_FILTER } from '../actions/types'

const filtersReducerDefaultState = {
  showByStatus: 'ALL',
}

export default (state = filtersReducerDefaultState, action) => {
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
