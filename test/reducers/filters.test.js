import filtersReducer from '../../src/reducers/filters'
import { SET_ALL_FILTER, SET_COMPLETED_FILTER, SET_UNCOMPLETED_FILTER } from '../../src/actions/types'


describe('reducer filters should change filter state correctly', () => {
  test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
      showByStatus: 'ALL',
    })
  })

  test('should set showByStatus ALL', () => {
    const state = filtersReducer(undefined, { type: SET_ALL_FILTER })
    expect(state.showByStatus).toBe('ALL')
  })

  test('should set showByStatus COMPLETED', () => {
    const state = filtersReducer(undefined, { type: SET_COMPLETED_FILTER })
    expect(state.showByStatus).toBe('COMPLETED')
  })

  test('should set showByStatus UNCOMPLETED', () => {
    const state = filtersReducer(undefined, { type: SET_UNCOMPLETED_FILTER })
    expect(state.showByStatus).toBe('UNCOMPLETED')
  })
})