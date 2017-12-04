import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TodosList from './TodosList'
import Header from './Header'
import Bottom from './Bottom'

const MainView = props => (
  <div className={props.className}>
    <Header />
    <TodosList />
    <Bottom />
  </div>
)


MainView.defaultProps = {
  className: '',
}

MainView.propTypes = {
  className: PropTypes.string,
}

const MainViewStyled = styled(MainView) `
font: 26px 'Helvetica Neue', Helvetica, Arial, sans-serif;
line-height: 1.4em;
background: white;
color: #4d4d4d;
min-width: 230px;
max-width: 750px;
margin: 0 auto;
`

export default MainViewStyled
