import express from 'express'
import db from '../util/fakeData'

const router = express.Router()

router.get('/test', (req, res) => {
  res.json({
    payload: 'API working as expected'
  })
})

router.post('/', (req, res) => {
  const { token } = req.body
  console.log('requesting data for', req.body)
  const found = db.find(user => user.token === token)
  setTimeout(() => {
    if (found) {
      res.json({ payload: found })
    } else {
      res.json({ payload: 'not found' })
    }
  }, 500)
})

export default router
