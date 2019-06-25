import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_VALIDATE_FULFILLED,
  ADDRESS_VALIDATE_REJECTED,
} from 'constants/AddressConstants'
import { validateAddress } from 'services/addressServices'

function* handlerValidateAddress(action) {
  try {
    const body = { formatted_address: action.payload.stopValue }
    const res = yield call(validateAddress, body)

    yield put({ type: ADDRESS_VALIDATE_FULFILLED, payload: res.response.data })
  } catch (e) {
    yield put({ type: ADDRESS_VALIDATE_REJECTED, payload: e.response.data })
  }
}

export function* watcherAddress() {
  yield all([takeLatest(ADDRESS_VALIDATE_REQUIRED, handlerValidateAddress)])
}
