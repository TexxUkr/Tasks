import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import todosSelector from '../selectors/todos'
import Todo from './Todo'

const TodosList = props => (
  <div>
    {
      props.todos.length === 0 ? (null
      ) : (
          props.todos.map(todo => (<Todo key={todo.id} state={todo} activeTaskFlag={props.activeTaskFlag} />))
        )
    }
  </div>
)

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTaskFlag: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return ({
    todos: todosSelector(state.todos.tasks, state.filters.showByStatus),
    activeTaskFlag: state.todos.activeTask,
  })
}

export default connect(mapStateToProps, null)(TodosList)
