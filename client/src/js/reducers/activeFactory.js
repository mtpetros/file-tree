import { factories } from 'Lib/api'

const initialState = {
  id: null,
  name: '',
  bottom: '',
  top: '',
  amount: '',
  children: []
}

const SET_FACTORY = 'activeFactory/SET_FACTORY'
const RESET_FACTORY = 'activeFactory/RESET_FACTORY'
const SET_KEY = 'activeFactory/SET_KEY'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FACTORY:
      return payload
    case RESET_FACTORY:
      return initialState
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

export const resetFactory = () => {
  return { type: RESET_FACTORY }
}

export const setKey = (key, value) => {
  return { type: SET_KEY, payload: { key, value } }
}

export const createFactory = (data) => {
  return () => factories.create({ data })
}

export const updateFactory = (id, data) => {
  return () => factories.update(id, { data })
}

export const removeFactory = (id) => {
  return () => factories.remove(id)
}

export default reducer
