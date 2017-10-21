import React, { Component } from 'react'
import { fetchGuests } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    this.props.dispatch(fetchGuests())
    return (
      <div>Hello world</div>
    )
  }
}

// export default App
export default connect()(App)
