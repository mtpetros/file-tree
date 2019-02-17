import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import reducers from 'Reducers/index'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
)

export default store
