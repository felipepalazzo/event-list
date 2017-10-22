import React from 'react'
import Attendees from './Attendees'
import { Route } from 'react-router-dom'
import EditAttendee from './EditAttendee'

const App = () =>
  <div>
    <Route exact path="/" component={Attendees}/>
    <Route path="/attendees/:id" component={EditAttendee}/>
  </div>

export default App
