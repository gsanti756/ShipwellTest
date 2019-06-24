import { fork, all } from 'redux-saga/effects'
import { AddressSagas } from 'sagas/addressSagas'

export default function* root() {
  yield all([fork(AddressSagas)])
}
