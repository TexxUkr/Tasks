import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTimer, updateTimer } from '../actions'
import Icon from './Icons'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerOn: props.timerOn,
      timeSpent: props.timeSpent,
    }
  }

  componentDidMount = () => {
    console.info('Timer did mount here')
    if (this.state.timerOn) {
      this.setState(state => ({ ...state, timeSpent: this.props.timeSpent }))
      this.interval = setInterval(this.tick, 1000)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.info('component will receive new props', nextProps)
    if (nextProps.timerOn) this.interval = setInterval(this.tick, 1000)
    else clearInterval(this.interval)
  }

  componentWillUnmount = () => {
    console.info('Timer will unmount here', this.state.timeSpent)
    this.props.toggleTimer(this.props.index)
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
        <button className="buttonIcon" onClick={() => this.props.toggleTimer(this.props.index)}>
          <Icon type={this.props.timerOn ? 'timerOff' : 'timerOn'} />
        </button>
        {this.state.timeSpent}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTimer: index => dispatch(toggleTimer(index)),
  updateTimer: (index, timerStarted, timeSpent) => dispatch(updateTimer(index, timerStarted, timeSpent)),
})

function mapStateToProps(state) {
  return ({
    activeTaskFlag: state.todos.activeTaskFlag,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
