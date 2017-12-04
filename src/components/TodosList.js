import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import todosSelector from '../selectors/todos'
import Todo from './Todo'

const TodosList = props => (
  <div className={props.className}>
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

const TodosListStyled = styled(TodosList) `
max-height: 70vh;
overflow: auto;
overflow-x: hidden;
`


export default connect(mapStateToProps, null)(TodosListStyled)
