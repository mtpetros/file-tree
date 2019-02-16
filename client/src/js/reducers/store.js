import thunk from 'redux-thunk'

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import reducers from 'Reducers/index'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
)

export default store
