import axios from 'axios'

export const FETCH_GUESTS = 'FETCH_GUESTS'
export const FETCH_GUESTS_SUCCESS = 'FETCH_GUESTS_SUCCESS'
export const FETCH_GUESTS_FAIL = 'FETCH_GUESTS_FAIL'

export const FETCH_GUEST = 'FETCH_GUEST'
export const FETCH_GUEST_SUCCESS = 'FETCH_GUEST_SUCCESS'
export const FETCH_GUEST_FAIL = 'FETCH_GUEST_FAIL'

export const SEND_FORM = 'SEND_FORM'
export const UPDATE = 'UPDATE'

const ROOT_URL = '/attendees'

export const listGuests = () => {
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

export const listGuest = (id) => {
  return function (dispatch) {
    dispatch({type: FETCH_GUEST})
    axios.get(`${ROOT_URL}/${id}`)
      .then((response) => {
        dispatch({type: FETCH_GUEST_SUCCESS, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_GUEST_FAIL, payload: err.response})
      })
  }
}

export const sendForm = ({id, postcode, optedin}) => ({
  type: SEND_FORM,
  id,
  postcode,
  optedin
})

export const update = ({id, name, email}) => ({
  type: UPDATE,
  id,
  name,
  email,
})
