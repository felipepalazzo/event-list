import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import { listGuests } from '../actions'

class Attendees extends Component {
  constructor(props) {
    super(props)
    this.state = {'selected': []}
    this.handleRowSelection = this.handleRowSelection.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(listGuests())
  }
  handleRowSelection(selectedRows) {
    this.setState({
      selected: selectedRows,
    })
  }
  isSelected(index) {
    return this.state.selected.includes(index)
  }
  render(){
    const { guests, fetching, error } = this.props
    return (
      <div>
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest, index) => (
              <TableRow key={guest.id} selected={this.isSelected(index)}>
                <TableRowColumn>{guest.name}</TableRowColumn>
                <TableRowColumn>{guest.email}</TableRowColumn>
                <TableRowColumn>{
                  !this.isSelected(index)
                    ? ''
                    : <Link to={`/attendees/${guest.id}`}>
                      <RaisedButton label="Edit" primary={true} />
                    </Link>
                }</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        { !guests.length && fetching &&
          <div>Loading....</div>
        }
        { error &&
          <div>Error.</div>
        }
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
