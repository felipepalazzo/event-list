import {
  FETCH_GUEST,
  FETCH_GUEST_SUCCESS,
  FETCH_GUEST_FAIL,
  SEND_FORM,
  UPDATE_GUEST
} from '../actions'

const initialState = {
  guest: {},
  fetching: false,
  fetched: false,
  error: null,
}

const guest = (state = initialState, action) => {
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
    if (state.guest.id !== action.id) {
      return state
    }
    return {
      ...state,
      guest: {
        ...state.guest,
        postcode: action.postcode,
        optedin: action.optedin
      }
    }
  case UPDATE_GUEST:
    if (state.guest.id !== action.id) {
      return state
    }
    return {
      ...state,
      guest: {
        ...state.guest,
        name: action.name,
        email: action.email
      }
    }
  default:
    return state
  }
}

export default guest
