import { ADDRESS_VALIDATE_REQUIRED } from '../constants'

export const validateAddress = (stopName, stopValue) => {
  return { type: ADDRESS_VALIDATE_REQUIRED, payload: { stopName, stopValue } }
}
