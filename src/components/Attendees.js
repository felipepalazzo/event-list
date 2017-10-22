import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import AccountCicle from 'material-ui/svg-icons/action/account-circle'
import { listGuests } from '../actions'

class Attendees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldRedirect: false,
      guestId: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(listGuests())
  }
  handleClick(guestId) {
    this.setState({
      shouldRedirect: true,
      guestId,
    })
  }
  render(){
    const { guests, fetching, error } = this.props
    if (this.state.shouldRedirect) {
      return <Redirect to={`/attendees/${this.state.guestId}`} />
    }
    return (
      <div>
        { !guests.length && fetching &&
          <div>Loading....</div>
        }
        { error &&
          <div>Error.</div>
        }
        <List>
          {guests.map(guest => (
            <ListItem
              key={guest.id}
              primaryText={guest.name}
              secondaryText={guest.email || '--'}
              leftIcon={<AccountCicle />}
              onClick={() => this.handleClick(guest.id)} />
          ))}
        </List>
      </div>
    )
  }
}

Attendees.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
    }).isRequired
  )
}

const mapStateToProps = (state) => {
  const { guests, error, fetched, fetching } = state.fetchGuests
  return {
    guests,
    fetched,
    fetching,
    error,
  }
}

export default connect(mapStateToProps)(Attendees)
