const express = require('express')
const cors = require('cors')
const logger = require('morgan')

//const middleware = require('./middleware')
const routes = require('./src/routes')

const app = express()
const port = process.env.APP_PORT || 8080

const corsOptions = {
  origin: 'http://0.0.0.0:7324',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(express.json({ limit: '50mb' }))

app.use('/api/factories', routes.factories)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
