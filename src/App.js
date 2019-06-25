import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers/rootReducer'
import sagas from 'sagas'
import Home from 'screens/Home'
import 'index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
