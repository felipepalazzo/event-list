import axios from 'axios'

export const FETCH_GUESTS = 'FETCH_GUESTS'
export const FETCH_GUESTS_SUCCESS = 'FETCH_GUESTS_SUCCESS'
export const FETCH_GUESTS_FAIL = 'FETCH_GUESTS_FAIL'

const ROOT_URL = '/attendees'

export const fetchGuests = () => {
  return function (dispatch) {
    dispatch({type: FETCH_GUESTS})
    axios.get(ROOT_URL)
      .then((response) => {
        dispatch({type: FETCH_GUESTS_SUCCESS, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_GUESTS_FAIL, payload: err.response})
      })
  }
}
