import React, { Component } from 'react'
import { connect } from 'react-redux'

class MailDispatch extends Component {
  render() {
    const { guest } = this.props
    window.AkkrooAPI.sendEmail(guest.email, 'registrationEmail', guest)
    return null
  }
}

const mapStateToProps = (state) => {
  const { guest } = state.fetchGuest
  return { guest }
}

export default connect(mapStateToProps)(MailDispatch)
