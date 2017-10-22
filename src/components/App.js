import React from 'react'
import Attendees from './Attendees'
import { Route } from 'react-router-dom'
import EditAttendee from './EditAttendee'
import confirmationForm from './confirmationForm'

const App = () =>
  <div>
    <Route exact path="/" component={Attendees}/>
    <Route exact path="/attendees/:id" component={EditAttendee}/>
    <Route exact path="/attendees/:id/postcode" component={confirmationForm}/>
  </div>

export default App
