import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Success from './Success'
import RaisedButton from 'material-ui/RaisedButton'
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
    this.setState({ shouldSendEmail: true })
  }
  render(){
    const shouldSendEmail = this.state.shouldSendEmail
    if (shouldSendEmail) {
      return (<Success />)
    }
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
          style={styles.checkbox}
          label="Receive marketing emails"
          onCheck={this.handleInputChange}
        />
        <RaisedButton
          label="Save"
          disabled={!this.state.optedin}
          primary={true}
          onClick={this.handleClick} />
      </div>
    )
  }
}

const styles = {
  checkbox: {
    paddingTop: 10,
    paddingBottom: 20,
  }
}

confirmationForm.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(confirmationForm)
