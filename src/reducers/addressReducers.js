import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_VALIDATE_FULFILLED,
  ADDRESS_VALIDATE_REJECTED,
  ADDRESS_EDIT_SET,
  ADDRESS_COMPLETE_SET,
} from '../constants'

const INITIAL_STATE = {
  loading: false,
  address: [],
  selected: null,
  indexSelected: null,
  error: '',
  nonFieldErrors: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_VALIDATE_REQUIRED:
      return { ...state, loading: true, error: '', nonFieldErrors: [] }

    case ADDRESS_VALIDATE_FULFILLED:
      return {
        ...state,
        loading: false,
        error: '',
        nonFieldErrors: [],
        address: [...state.address, action.payload],
      }

    case ADDRESS_VALIDATE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error_description,
        nonFieldErrors: action.payload.non_field_errors,
      }

    case ADDRESS_EDIT_SET:
      return {
        ...state,
        selected: action.payload.address,
        indexSelected: action.payload.index,
      }

    case ADDRESS_COMPLETE_SET:
      console.log(action.payload)
      debugger
      return {
        ...state,
        address: action.payload.address,
      }

    default:
      return state
  }
}
