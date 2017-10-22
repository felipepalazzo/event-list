import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thanks from './Thanks'
import PropTypes from 'prop-types'
import '../styles/styles.css'

class MailDispatch extends Component {
  render() {
    const { guest } = this.props
    window.AkkrooAPI.sendEmail(guest.email, 'registrationEmail', guest)
    return <div className="p-top-md"><Thanks /></div>
  }
}

MailDispatch.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired
}

const mapStateToProps = (state) => {
  const { guest } = state.guest
  return { guest }
}

export default connect(mapStateToProps)(MailDispatch)
