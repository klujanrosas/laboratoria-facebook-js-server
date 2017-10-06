import express from 'express'

import AuthController from './AuthRoutes'
import UserController from './UserRoutes'

const router = express.Router()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token')

  // intercepts OPTIONS method
  if (req.method === 'OPTIONS') {
    // respond with 200
    res.sendStatus(200)
  } else {
  // move on
    next()
  }
})

router.use('/user', UserController)
router.use('/auth', AuthController)

router.all('/', (req, res) => {
  res.status(200).json({ payload: 'Facebook JS Laboratoria API' })
})

router.use((req, res) => {
  res.status(404).json({
    payload: 'Parece que te equivocaste en acceder.'
  })
})

export default router
