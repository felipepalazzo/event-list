import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

Save.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired
}
