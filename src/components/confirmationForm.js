import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import MailDispatch from './MailDispatch'
import Save from './Save'
import { connect } from 'react-redux'
import { sendForm } from '../actions'

class confirmationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: parseInt(props.match.params.id),
      postcode: '',
      optedin: false,
      shouldSendEmail: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  handleClick() {
    this.props.dispatch(sendForm({
      id: this.state.id,
      postcode: this.state.postcode,
      optedin: this.state.optedin,
    }))
    if (this.state.optedin) {
      this.setState({ shouldSendEmail: true })
    }
  }
  render(){
    const shouldSendEmail = this.state.shouldSendEmail
    return (
      <div>
        <TextField
          name="postcode"
          value={this.state.postcode}
          hintText="Postcode"
          onChange={this.handleInputChange}
        />
        <Checkbox
          name="optedin"
          label="Receive marketing emails"
          onCheck={this.handleInputChange}
        />
        <RaisedButton label="Save" primary={true} onClick={this.handleClick} />
        {
          shouldSendEmail ? (<div><MailDispatch /><Save /></div>) : ''
        }
      </div>
    )
  }
}

export default connect()(confirmationForm)
