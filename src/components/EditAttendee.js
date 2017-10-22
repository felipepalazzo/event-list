import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { listGuest, update } from '../actions'

class EditAttendee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: parseInt(props.match.params.id),
      shouldRedirect: false,
      name: '',
      email: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(listGuest(match.params.id))
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.guest && nextProps.guest.id === this.state.id) {
      this.setState(nextProps.guest)
    }
  }
  handleInputChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }
  handleClick() {
    this.props.dispatch(update({
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
    }))
    this.setState({
      shouldRedirect: true
    })
  }
  render(){
    if (this.state.shouldRedirect) {
      return <Redirect to={`/attendees/${this.state.id}/postcode`} />
    }
    return(
      <div>
        <TextField
          name="name"
          value={this.state.name}
          hintText="Name"
          onChange={this.handleInputChange}
        />
        <br/><br/>
        <TextField
          name="email"
          type="email"
          value={this.state.email}
          hintText="E-mail"
          onChange={this.handleInputChange}
        />
        <br/><br/>
        <RaisedButton
          label="Next"
          primary={true}
          onClick={this.handleClick}
          disabled={!this.state.name || !this.state.email} />
      </div>
    )
  }
}

EditAttendee.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  guest: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired
}

const mapStateToProps = (state) => {
  const { guest } = state.fetchGuest
  return { guest }
}

export default connect(mapStateToProps)(EditAttendee)
