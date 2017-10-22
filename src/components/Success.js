import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MailDispatch from './MailDispatch'
import Save from './Save'
import Reset from './Reset'
import { connect } from 'react-redux'

class Success extends Component {
  render() {
    const { guest } = this.props
    return(
      <div>
        { guest.optedin && <MailDispatch /> }
        <Save />
        <Reset />
      </div>
    )
  }
}

Success.propTypes = {
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

export default connect(mapStateToProps)(Success)
