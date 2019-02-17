import { factories } from 'Lib/api'

const initialState = {
  factories: []
}

const POST_FACTORY = 'factories/POST_FACTORY'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_FACTORY:
      return { ...state, factories: payload }
    default:
      return state
  }
}

const postFactory = (data) => {
  return { type: POST_FACTORY, payload: data }
}

export const createFactory = (data) => {
  return (dispatch) => factories.create(data)
    .then(res => dispatch(postFactory(res)))
}

export default reducer
