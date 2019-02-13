const express = require('express')

const middleware = require('./middleware')
const routes = require('./routes')

const app = express()
const port = process.env.APP_PORT

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
