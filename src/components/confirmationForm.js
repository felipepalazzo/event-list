import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

class confirmationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: parseInt(props.match.params.id),
      postcode: '',
      optedin: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange() {

  }
  render(){
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
        <RaisedButton label="Next" primary={true} />
      </div>
    )
  }
}

export default confirmationForm
