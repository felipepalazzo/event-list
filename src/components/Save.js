import React, { Component } from 'react'
import { connect } from 'react-redux'

class Save extends Component {
  render() {
    const { guest } = this.props
    console.log('Details captured from the user:', guest)
    return null
  }
}

const mapStateToProps = (state) => {
  const { guest } = state.fetchGuest
  return { guest }
}

export default connect(mapStateToProps)(Save)
