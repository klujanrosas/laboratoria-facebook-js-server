import express from 'express'

import AuthController from './AuthRoutes'

const router = express.Router()


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
