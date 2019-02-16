import { pool } from './connection'

const performQuery = (query, client) => {
  return client.query(query)
}

const client = pool.connect()

const performTransaction = (queries) => {
  return client.then(() => {
    client.query('BEGIN')
  })
    .then(() => {
      return Promise.all(queries.map(performQuery))
    })
    .then((res) => {
      client.query('COMMIT')
      return res
    })
    .catch((e) => {
      console.error(e)
      return client.query('ROLLBACK')
    })
    .finally((res) => {
      client.release()
      return res
    })
}

module.exports = { performTransaction }
