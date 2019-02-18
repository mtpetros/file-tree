import random from 'lodash/random'

const generateChildren = (opts) => {
  const {
    top = 0,
    bottom = 0,
    amount = 0
  } = opts

  if (!amount) {
    return []
  }

  const safeTop = Number(top) + 1
  const safeBottom = Number(bottom) - 1
  const safeAmount = Number(amount)

  const mapChildren = (child) => {
    return {
      id: null,
      number: random(safeBottom, safeTop)
    }
  }

  const emptyChildren = [...new Array(safeAmount)]

  const newChildren = emptyChildren.map(mapChildren)

  console.log('newChildren', newChildren)

  return newChildren
}

export default generateChildren
