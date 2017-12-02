import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const unDoneIcon = require('react-icons/lib/fa/circle-o')
const closeIcon = require('react-icons/lib/md/close')
const doneIcon = require('react-icons/lib/fa/check-circle-o')
const timerOnIcon = require('react-icons/lib/md/timer-off')
const timerOffIcon = require('react-icons/lib/md/timer')

const iconsMapping = new Map()
iconsMapping.set('close', { icon: closeIcon, color: 'red' })
iconsMapping.set('done', { icon: doneIcon, color: 'lightgreen' })
iconsMapping.set('undone', { icon: unDoneIcon, color: 'grey' })
iconsMapping.set('default', { icon: unDoneIcon, color: 'grey' })
iconsMapping.set('timerOn', { icon: timerOnIcon, color: 'green' })
iconsMapping.set('timerOff', { icon: timerOffIcon, color: 'green' })


const Icon = (props) => {
  if (props == null) return null
  return (
    <section className={props.className} type={iconsMapping.has(props.type) ? props.type : 'default'}>
      {
        iconsMapping.get(iconsMapping.has(props.type) ? props.type : 'default').icon()
      }
    </section>
  )
}

Icon.defaultProps = {
  type: '',
  className: '',
}

Icon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
}

const IconStyled = styled(Icon)`
font-size: 36px;
line-height: 18px;
padding-left: 8px;
padding-right: 8px;
align-self: flex-start;
color: ${props => iconsMapping.get(props.type).color};
`

export default IconStyled
