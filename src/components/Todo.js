/*
The desired view is:
+--------------------------------------+
|   done_icon  todo_info  close button |
+--------------------------------------+
*/

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo, toggleTimer} from '../actions'
import Icon from './Icons'

const Todo = (props) => {
  const completedIconState = props.state.completed ? 'done' : 'undone'
  let timerIcon = props.state.timerStarted ? 'timerOff' : 'timerOn'
  if (props.activeTaskFlag && !props.state.timerStarted) timerIcon = 'timerOnGray'
  return (
    <div className={props.className} >
      <div className="leftSide">
        <button className="buttonIcon" onClick={() => { props.toggleTodo(props.state.id) }}>
          <Icon type={completedIconState} />
        </button>
        <div className="todoText">
          {props.state.text}
        </div>
      </div>
      <div>
        <button className="buttonIcon" onClick={() => {(props.activeTaskFlag && !props.state.timerStarted) ? null : props.toggleTimer(props.state.id) }}>
          <Icon type={timerIcon} />
        </button>
        <button className="buttonIcon" onClick={() => { props.deleteTodo(props.state.id) }}>
          <Icon type="close" />
        </button>
      </div>
    </div>
  )
}


Todo.propTypes = {
  state: PropTypes.shape({
    completed: PropTypes.bool,
    text: PropTypes.string,
    id: PropTypes.string,
    timerStarted: PropTypes.bool,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleTimer: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  className: PropTypes.string,
  activeTaskFlag: PropTypes.bool.isRequired,
}

Todo.defaultProps = {
  className: '',
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: index => dispatch(deleteTodo(index)),
  toggleTodo: index => dispatch(toggleTodo(index)),
  toggleTimer: index => dispatch(toggleTimer(index)),
})

const TodoStyled = styled(Todo) `
padding-left: 12px;
padding-right: 12px;
padding-top: 10px;
padding-bottom: 10px;
color: #4d4d4d;
background-color: rgba(0, 0, 0, 0.003);
font-family: Roboto, Arial, sans-serif;
font-size: 26px;
border-bottom : 1px solid rgb(68, 74, 82);
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: flex-start;
.leftSide {
  flex-direction: row;
  display: flex;
}
.buttonIcon {
  color: white;
  padding: 3px;
  align-self: flex-start;
  background-color: rgba(34, 37, 41, 0);
  border: 0px;
  outline-style:none;
  cursor: pointer;
}
.todoText {
  white-space: pre-line;
  word-break: break-all;
}
`

export default connect(null, mapDispatchToProps)(TodoStyled)

