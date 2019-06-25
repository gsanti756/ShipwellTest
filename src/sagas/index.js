import { fork, all } from 'redux-saga/effects'
import { watcherAddress } from 'sagas/addressSagas'

export default function* root() {
  yield all([fork(watcherAddress)])
}
