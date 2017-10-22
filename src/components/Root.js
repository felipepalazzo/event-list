import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <App></App>
      </MuiThemeProvider>
    </Router>
  </Provider>
)

export default Root
