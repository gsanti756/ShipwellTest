import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_EDIT_SET,
  ADDRESS_COMPLETE_SET,
} from '../constants'

export const validateAddress = (stopName, stopValue) => {
  return { type: ADDRESS_VALIDATE_REQUIRED, payload: { stopName, stopValue } }
}

export const setEditAddress = (address, index) => {
  return { type: ADDRESS_EDIT_SET, payload: { address, index } }
}

export const setAddress = (address) => {
  return { type: ADDRESS_COMPLETE_SET, payload: { address } }
}
