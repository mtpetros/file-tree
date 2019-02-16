const { pool } = require('./connection')
const { camelize } = require('./helpers')

const save = (data) => {
  const {
    name,
    bottom,
    top,
    amount
  } = data

  const text = `INSERT INTO factories (
      name,
      bottom,
      top,
      amount
    )

    VALUES ($1, $2, $3, $4, NOW(), NOW())

    RETURNING *;`

  const values = [
    name,
    bottom,
    top,
    amount
  ]

  return pool.query({ text, values })
    .then(camelize)
}

module.exports = {
  save
}
