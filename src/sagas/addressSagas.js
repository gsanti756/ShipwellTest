import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_VALIDATE_FULFILLED,
  ADDRESS_VALIDATE_REJECTED,
} from 'constants/AddressConstants'
import { validateAddress } from 'services/addressServices'

function mapStop(stopName, response) {
  return {
    name: stopName,
    address_1: response.address_1,
    address_2: response.address_2,
    city: response.city,
    country: response.country,
    formatted_address: response.formatted_address,
    latitude: response.latitude,
    longitude: response.longitude,
    phone_number: response.phone_number,
    postal_code: response.postal_code,
    state_province: response.state_province,
    timezone: response.timezone,
    completed: false,
  }
}

function* handlerValidateAddress(action) {
  try {
    const body = { formatted_address: action.payload.stopValue }
    const res = yield call(validateAddress, body)
    const addres = mapStop(action.payload.stopName, res.data.geocoded_address)
    yield put({ type: ADDRESS_VALIDATE_FULFILLED, payload: addres })
  } catch (e) {
    yield put({ type: ADDRESS_VALIDATE_REJECTED, payload: e.response.data })
  }
}

export function* watcherAddress() {
  yield all([takeLatest(ADDRESS_VALIDATE_REQUIRED, handlerValidateAddress)])
}
