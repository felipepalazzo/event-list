import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { fetchGuests } from '../actions'

class Atendees extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGuests())
  }
  render(){
    const { guests, fetching, error } = this.props
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest, index) => (
              <TableRow key={index}>
                <TableRowColumn>{guest.name}</TableRowColumn>
                <TableRowColumn>{guest.email}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        { fetching &&
          <div>Loading....</div>
        }
        { error &&
          <div>Error.</div>
        }
      </div>
    )
  }
}

Atendees.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
    }).isRequired
  )
}

const mapStateToProps = (state) => {
  const { guests, error, fetched, fetching } = state
  return {
    guests,
    fetched,
    fetching,
    error,
  }
}

export default connect(mapStateToProps)(Atendees)
