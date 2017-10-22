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
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1 col-xs-12">
          <Route exact path="/" component={Attendees}/>
          <Route exact path="/attendees/:id" component={EditAttendee}/>
          <Route exact path="/attendees/:id/postcode" component={confirmationForm}/>
        </div>
      </div>
    </div>
  </div>

export default App
