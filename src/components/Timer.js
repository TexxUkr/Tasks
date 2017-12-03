import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTimer } from '../actions'
import Icon from './Icons'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeSpent: props.timeSpent,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.info('component will receive new props', nextProps)
    if (!this.props.timerOn && nextProps.timerOn) this.interval = setInterval(this.tick, 1000)
    else if (!nextProps.timerOn) clearInterval(this.interval)
  }

  componentWillUnmount = () => {
    console.info('Timer will unmount here', this.props.index)
    this.props.updateTimer(this.props.index, false, this.state.timeSpent)
    clearInterval(this.interval)
  }

  tick = () => {
    console.info('Timer tick mount here')
    this.setState(state => ({ ...state, timeSpent: state.timeSpent + 1 }))
  }

  render() {
    let iconType = this.props.timerOn ? 'timerOff' : 'timerOn'
    if ((this.props.activeTaskFlag && !this.props.timerOn) || this.props.taskCompletedFlag) iconType = 'timerOnGray'
    return (
      <div className={this.props.className}>
        <button
          className="buttonIcon"
          onClick={() => (
            ((this.props.activeTaskFlag && !this.props.timerOn) || this.props.taskCompletedFlag)
              ? null : this.props.updateTimer(
                this.props.index,
                !this.props.timerOn,
                this.state.timeSpent,
              )
          )}>
          <Icon type={iconType} />
        </button>
        {this.state.timeSpent}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateTimer: (index, timerStarted, timeSpent) => dispatch(updateTimer(index, timerStarted, timeSpent)),
})

function mapStateToProps(state) {
  return ({
    activeTaskFlag: state.todos.activeTaskFlag,
  })
}

const TimerStyled = styled(Timer) `
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: flex-start;
`


export default connect(mapStateToProps, mapDispatchToProps)(TimerStyled)
