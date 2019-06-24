import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_VALIDATE_FULFILLED,
  ADDRESS_VALIDATE_REJECTED,
} from '../constants'

const INITIAL_STATE = {
  loading: false,
  error: '',
  address: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_VALIDATE_REQUIRED:
      return { ...state, loading: true, error: '' }

    case ADDRESS_VALIDATE_FULFILLED:
      return { ...state, loading: false }

    case ADDRESS_VALIDATE_REJECTED:
      return { ...state, loading: false }

    default:
      return state
  }
}
