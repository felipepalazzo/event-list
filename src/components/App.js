import React from 'react'
import Attendees from './Attendees'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () =>
  <MuiThemeProvider>
    <Attendees />
  </MuiThemeProvider>

export default App
