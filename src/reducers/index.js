import {
  FETCH_GUESTS,
  FETCH_GUESTS_SUCCESS,
  FETCH_GUESTS_FAIL,
} from '../actions'

const initialState = {
  guests: [],
  fetching: false,
  fetched: false,
  error: null,
}

const fetchGuests = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_GUESTS:
    return {...state, fetching: true}
  case FETCH_GUESTS_SUCCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      guests: action.payload,
    }
  case FETCH_GUESTS_FAIL:
    return {
      ...state,
      fetching: false,
      error: action.payload,
    }
  default:
    return state
  }
}

export default fetchGuests
