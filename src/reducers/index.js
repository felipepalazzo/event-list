import { combineReducers } from 'redux'
import fetchGuests from './fetchGuests'
import fetchGuest from './fetchGuest'

export default combineReducers({
  fetchGuests,
  fetchGuest
})
