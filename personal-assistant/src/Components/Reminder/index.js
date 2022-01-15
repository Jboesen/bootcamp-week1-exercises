import React from 'react'
import { Reminder } from './styles'

const ReminderComponent = ({ text }) => (
  <Reminder >{text}</Reminder>
)
// onClick={() => this.props.removeReminder()}
export default ReminderComponent
