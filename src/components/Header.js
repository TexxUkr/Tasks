import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: '',
      allCompleted: false,
    }
  }

  addTodo = (e) => {
    console.info('addCommentFormSubmit', this.state.todoText)
    e.preventDefault()
    this.props.addTodo({ text: this.state.todoText, completed: false })
    this.setState(state => ({ ...state, todoText: '' }))
  }

  addTodoTextChange = (e) => {
    e.preventDefault()
    const newValue = e.target.value
    this.setState(() => ({
      ...this.state,
      todoText: newValue,
    }))
  };

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.addTodo}>
          <input className="inputHeader" value={this.state.todoText} onChange={this.addTodoTextChange} placeholder="What needs to be done" />
        </form>
      </div>
    )
  }
}

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
  className: PropTypes.string,
}

const HeaderStyled = styled(Header)`
width: 100%;
.inputHeader {
  box-sizing: border-box;
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  padding: 16px 16px 16px 70px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
`


const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
})

export default connect(null, mapDispatchToProps)(HeaderStyled)
