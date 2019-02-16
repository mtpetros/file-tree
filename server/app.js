const express = require('express')

//const middleware = require('./middleware')
const routes = require('./src/routes')

const app = express()
const port = process.env.APP_PORT || 8080

app.use('/api/factories', routes.factories)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
