import { combineReducers } from 'redux'

import AddressReducers from './addressReducers'

const rootReducer = combineReducers({
  addressState: AddressReducers,
})

export default rootReducer
