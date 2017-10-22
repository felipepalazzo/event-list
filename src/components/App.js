import React from 'react'
import Attendees from './Attendees'
import { Route } from 'react-router-dom'
import EditAttendee from './EditAttendee'
import confirmationForm from './confirmationForm'
import AppBar from 'material-ui/AppBar'

const App = () =>
  <div>
    <AppBar
      title="Event List"
    />
    <Route exact path="/" component={Attendees}/>
    <Route exact path="/attendees/:id" component={EditAttendee}/>
    <Route exact path="/attendees/:id/postcode" component={confirmationForm}/>
  </div>

export default App
