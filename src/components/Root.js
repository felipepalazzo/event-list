import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import EditAttendee from './EditAttendee'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/attendees/:id" component={EditAttendee}/>
      </div>
    </Router>
  </Provider>
)

export default Root
