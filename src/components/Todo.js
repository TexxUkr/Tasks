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
import { deleteTodo, toggleTodo } from '../actions'
import Icon from './Icons'
import Timer from './Timer'

const Todo = (props) => {
  const completedIconState = props.state.completed ? 'done' : 'undone'
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
      <div className="rightSide">
        <Timer
          taskCompletedFlag={props.state.completed}
          timeSpent={props.state.timeSpent}
          timerOn={props.state.timerStarted}
          id={props.state.id}
        />
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
    timeSpent: PropTypes.number,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Todo.defaultProps = {
  className: '',
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: index => dispatch(deleteTodo(index)),
  toggleTodo: index => dispatch(toggleTodo(index)),
})

const TodoStyled = styled(Todo) `
padding-left: 12px;
padding-right: 12px;
padding-top: 10px;
padding-bottom: 10px;
max-height: 100px;
color: #4d4d4d;
background-color: rgba(0, 0, 0, 0.003);
font-family: Roboto, Arial, sans-serif;
font-size: 26px;
border-bottom : 1px solid rgb(68, 74, 82);
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
.leftSide {
  flex-direction: row;
  display: flex;
  align-items: center;
  padding-right: 20px;
}
.rightSide {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.buttonIcon {
  color: white;
  padding: 3px;
  padding-right: 10px;
  background-color: rgba(34, 37, 41, 0);
  border: 0px;
  outline-style:none;
  cursor: pointer;
}
.todoText {
  max-height: 100px;
  white-space: pre-line;
  word-break: break-all;
  overflow: auto;
  text-overflow: ellipsis;
}
`

export default connect(null, mapDispatchToProps)(TodoStyled)
