const { Pool } = require('pg')

const database = process.env.PGDATABASE
const host = process.env.PGHOST
const port = process.env.PGPORT
const user = process.env.PGUSER
const max = 10

const opts = {
  database,
  host,
  port,
  user,
  max
}

const pool = new Pool(opts)

module.exports = {
  pool
}
