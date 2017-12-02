import { setAllFilter, setCompletedFilter, setUnCompletedFilter } from '../../src/actions/filters'
import { SET_ALL_FILTER, SET_COMPLETED_FILTER, SET_UNCOMPLETED_FILTER } from '../../src/actions/types'

describe('action filters', () => {
  it('SET_ALL_FILTER has the correct type', () => {
    const action = setAllFilter()
    expect(action.type).toEqual(SET_ALL_FILTER)
  })

  it('SET_COMPLETED_FILTER has the correct type', () => {
    const action = setCompletedFilter()
    expect(action.type).toEqual(SET_COMPLETED_FILTER)
  })

  it('SET_UNCOMPLETED_FILTER has the correct type', () => {
    const action = setUnCompletedFilter()
    expect(action.type).toEqual(SET_UNCOMPLETED_FILTER)
  })
})
