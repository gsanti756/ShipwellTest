import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  ADDRESS_VALIDATE_REQUIRED,
  ADDRESS_VALIDATE_FULFILLED,
  ADDRESS_VALIDATE_REJECTED,
} from 'constants/AddressConstants'
import { validateAddress } from 'services/addressServices'

function* handlerValidateAddress(address) {
  try {
    const response = yield call(validateAddress, address)
    yield put({ type: ADDRESS_VALIDATE_FULFILLED, payload: response })
  } catch (e) {
    yield put({ type: ADDRESS_VALIDATE_REJECTED, payload: e })
  }
}

export function* watcherAddress() {
  yield all([takeLatest(ADDRESS_VALIDATE_REQUIRED, handlerValidateAddress)])
}
