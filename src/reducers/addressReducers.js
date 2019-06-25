import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_VALIDATE_FULFILLED,
  ADDRESS_VALIDATE_REJECTED,
} from '../constants'

const INITIAL_STATE = {
  loading: false,
  address: [],
  error: '',
  nonFieldErrors: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_VALIDATE_REQUIRED:
      return { ...state, loading: true, error: '' }

    case ADDRESS_VALIDATE_FULFILLED:
      return { ...state, loading: false, error: '', nonFieldErrors: [] }

    case ADDRESS_VALIDATE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error_description,
        nonFieldErrors: action.payload.non_field_errors,
      }

    default:
      return state
  }
}
