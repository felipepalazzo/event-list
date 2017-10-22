import {
  FETCH_GUEST,
  FETCH_GUEST_SUCCESS,
  FETCH_GUEST_FAIL,
} from '../actions'

const initialState = {
  guest: {},
  fetching: false,
  fetched: false,
  error: null,
}

const fetchGuest = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_GUEST:
    return {...state, fetching: true}
  case FETCH_GUEST_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      guest: action.payload,
    }
  case FETCH_GUEST_FAIL:
    return {
      ...state,
      fetching: false,
      error: action.payload,
    }
  default:
    return state
  }
}

export default fetchGuest
