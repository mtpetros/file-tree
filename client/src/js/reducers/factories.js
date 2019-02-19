import { factories } from 'Lib/api'

const initialState = {
  data: []
}

const SET_FACTORIES = 'factory/SET_FACTORIES'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FACTORIES:
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setFactories = (data) => {
  return { type: SET_FACTORIES, payload: data }
}

export const getAllFactories = () => {
  return (dispatch) => factories.getAll()
    .then(res => dispatch(setFactories(res.json)))
}

export default reducer
