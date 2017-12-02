
import { SET_ALL_FILTER, SET_COMPLETED_FILTER, SET_UNCOMPLETED_FILTER } from './types'

// SET_ALL
export const setAllFilter = () => ({
  type: SET_ALL_FILTER,
})

// SET_COMPLETED
export const setCompletedFilter = () => ({
  type: SET_COMPLETED_FILTER,
})

// SET_UNCOMPLETED
export const setUnCompletedFilter = () => ({
  type: SET_UNCOMPLETED_FILTER,
})
