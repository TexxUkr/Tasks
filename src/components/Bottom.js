import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setAllFilter, setCompletedFilter, setUnCompletedFilter } from '../actions/filters'

const Bottom = (props) => {
  if (props.total === 0) return null
  return (
    <div className={props.className}>
      {props.total} Items left
      <div className="bottomButtons">
        <button onClick={() => props.setAllFilter()} className={props.filter === 'ALL' ? 'button focused' : 'button'}>All </button>
        <button onClick={() => props.setCompletedFilter()} className={props.filter === 'COMPLETED' ? 'button focused' : 'button'}>Completed </button>
        <button onClick={() => props.setUnCompletedFilter()} className={props.filter === 'UNCOMPLETED' ? 'button focused' : 'button'}>Active </button>
      </div>
    </div>
  )
}

Bottom.propTypes = {
  total: PropTypes.number,
  setAllFilter: PropTypes.func.isRequired,
  setCompletedFilter: PropTypes.func.isRequired,
  setUnCompletedFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
  className: PropTypes.string,
}

Bottom.defaultProps = {
  total: 0,
  filter: todos => todos,
  className: '',
}

const BottomStyled = styled(Bottom) `
padding-left: 22px;
padding-right: 12px;
padding-top: 10px;
padding-bottom: 10px;
color: #4d4d4d;
background-color: rgba(0, 0, 0, 0.003);
font-family: Roboto, Arial, sans-serif;
font-size: 16px;
border-bottom : 1px solid rgb(68, 74, 82);
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: flex-start;
.button {
  cursor: pointer;
}
.focused {
  color: red;
}

`

function mapStateToProps(state) {
  return ({
    total: state.todos.tasks.length,
    filter: state.filters.showByStatus,
  })
}

const mapDispatchToProps = dispatch => ({
  setAllFilter: () => dispatch(setAllFilter()),
  setCompletedFilter: () => dispatch(setCompletedFilter()),
  setUnCompletedFilter: () => dispatch(setUnCompletedFilter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomStyled)
