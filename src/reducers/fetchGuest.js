import {
  FETCH_GUEST,
  FETCH_GUEST_SUCCESS,
  FETCH_GUEST_FAIL,
  SEND_FORM
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
  case SEND_FORM:
    return {
      ...state,
      guest: {
        ...state.guest,
        id: action.id,
        postcode: action.postcode,
        optedin: action.optedin
      }
    }
  default:
    return state
  }
}

export default fetchGuest
