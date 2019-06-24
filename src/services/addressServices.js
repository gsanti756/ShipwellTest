import { post } from './generic.service'

export const validateAddress = async (address) => {
  try {
    return await post(`locations/addresses/validate/`, { address })
  } catch (e) {
    throw e
  }
}
