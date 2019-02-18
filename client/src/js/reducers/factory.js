import { factories } from 'Lib/api'
import generateChildren from 'Lib/generateChildren'

const initialState = {
  id: null,
  name: '',
  bottom: '',
  top: '',
  amount: '',
  children: []
}

const SET_FACTORY = 'factory/SET_FACTORY'
const SET_KEY = 'factory/SET_KEY'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FACTORY:
      return { ...state, ...payload }
    case SET_KEY:
      return {
        ...state,
        [payload.key]: payload.value
      }
    default:
      return state
  }
}

export const setFactory = (data) => {
  return { type: SET_FACTORY, payload: data }
}

export const setKey = (key, value) => {
  return { type: SET_KEY, payload: { key, value } }
}

export const createFactory = (data) => {
  return (dispatch) => factories.create({ data })
    .then(res => dispatch(setFactory(res)))
}

export const createChildren = (opts) => {
  return (dispatch) => {
    const children = generateChildren(opts)

    dispatch(setKey('children', children))
  }
}

export default reducer
