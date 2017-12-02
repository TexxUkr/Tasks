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
          props.todos.map(todo => (<Todo key={todo.id} state={todo} />))
        )
    }
  </div>
)

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

function mapStateToProps(state) {
  return ({
    todos: todosSelector(state.todos.tasks, state.filters.showByStatus),
  })
}

export default connect(mapStateToProps, null)(TodosList)
