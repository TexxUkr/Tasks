import React from 'react'
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
    if (nextProps.timerOn) this.interval = setInterval(this.tick, 1000)
    else clearInterval(this.interval)
  }

  componentWillUnmount = () => {
    console.info('Timer will unmount here', this.state.timeSpent)
    this.props.updateTimer(this.props.index, false, this.state.timeSpent)
    clearInterval(this.interval)
  }

  tick = () => {
    console.info('Timer tick mount here')
    this.setState(state => ({ ...state, timeSpent: state.timeSpent + 1 }))
  }

  render() {
    return (
      <div>
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
          <Icon type={this.props.timerOn ? 'timerOff' : 'timerOn'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
