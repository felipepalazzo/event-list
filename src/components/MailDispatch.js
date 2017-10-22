import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thanks from './Thanks'
import '../styles/styles.css'

class MailDispatch extends Component {
  render() {
    const { guest } = this.props
    window.AkkrooAPI.sendEmail(guest.email, 'registrationEmail', guest)
    return <div className="p-top-md"><Thanks /></div>
  }
}

const mapStateToProps = (state) => {
  const { guest } = state.fetchGuest
  return { guest }
}

export default connect(mapStateToProps)(MailDispatch)
