const { pool } = require('./connection')
const { camelize } = require('./helpers')

let place = 0
const reduceChildren = (factoryId, len) => (acc, child, i) => {
  const isLast = i === len - 1
  const finalPunc = isLast ? '' : ','
  const insert = `${acc.insert}($${place + 1}, $${place + 2})${finalPunc}\n`

  place += 2

  const values = [
    ...acc.values,
    factoryId,
    child.number
  ]

  return {
    ...acc,
    insert,
    values
  }
}

const initial = {
  insert: '',
  values: []
}

const save = (factoryId, children) => {
  const {
    insert,
    values
  } = children.reduce(
    reduceChildren(factoryId, children.length),
    initial
  )

  const text = `INSERT INTO children (
      factory_id,
      number
    )

    VALUES ${insert}

    RETURNING *;`

  return pool.query({ text, values })
    .then(camelize)
}

module.exports = {
  save
}
