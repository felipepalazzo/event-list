import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditAttendee extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div></div>)
  }
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

export default connect(mapStateToProps)(EditAttendee)
