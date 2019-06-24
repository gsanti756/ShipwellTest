import { ADDRESS_VALIDATE_REQUIRED } from '../constants'

export const validateAddress = (addess) => {
  return { type: ADDRESS_VALIDATE_REQUIRED, payload: { addess } }
}
