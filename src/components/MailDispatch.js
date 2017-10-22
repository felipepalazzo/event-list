import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thanks from './Thanks'

class MailDispatch extends Component {
  render() {
    const { guest } = this.props
    window.AkkrooAPI.sendEmail(guest.email, 'registrationEmail', guest)
    return <Thanks />
  }
}

const mapStateToProps = (state) => {
  const { guest } = state.fetchGuest
  return { guest }
}

export default connect(mapStateToProps)(MailDispatch)
