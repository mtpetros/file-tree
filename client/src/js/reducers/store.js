import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import reducers from 'Reducers/index'

const isDevelopment = process.env.NODE_ENV === 'development'
const middleware = isDevelopment ? [thunk, logger] : [thunk]

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middleware)
)

export default store
