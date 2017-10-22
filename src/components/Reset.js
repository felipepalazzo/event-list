import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

const Reset = () =>
  <Link to="/">
    <RaisedButton label="Home" primary={true} />
  </Link>

export default Reset
