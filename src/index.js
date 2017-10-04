import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import { APP_NAME, WEB_PORT } from './config/index'
import Routes from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(compression())

app.use('/api', Routes)

app.listen(WEB_PORT, () => {
  console.log(`${APP_NAME} running at port ${WEB_PORT}`)
})
