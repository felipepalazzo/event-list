import { combineReducers } from 'redux'
import fetchGuests from './fetchGuests'
import guest from './guest'

export default combineReducers({
  fetchGuests,
  guest
})
