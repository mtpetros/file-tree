const { pool } = require('./connection')
const { camelize } = require('./helpers')

const reduceChildren = (acc, child, i) => {
  const insert = `${acc.insert}($${i + 1}, ${i + 2})\n`

  const values = [
    ...acc.values,
    child.factoryId,
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
  } = children.reduce(reduceChildren, initial)

  const text = `INSERT INTO children (
      factory_id,
      number
    )

    VALUES ${insert}

    RETURNING *;`
  
  console.log(text)
  return pool.query({ text, values })
    .then(camelize)
}

module.exports = {
  save
}
