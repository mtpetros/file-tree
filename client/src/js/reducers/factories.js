import { factories } from 'Lib/api'

const initialState = {
  factories: []
}

const POST_FACTORIES = 'factories/POST_FACTORIES'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_FACTORIES:
      return { ...state, factories: payload }
    default:
      return state
  }
}

const createFactory = (data) => {
  return { type: POST_FACTORIES, payload: data }
}

export const createFactories = (data) => {
  return (dispatch) => factories.create(data)
    .then(res => dispatch(createFactory(res)))
}

export default reducer
