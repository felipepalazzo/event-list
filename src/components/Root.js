import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
