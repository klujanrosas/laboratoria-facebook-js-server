import _ from 'lodash'
import express from 'express'
import db from '../util/fakeData'

const router = express.Router()

router.post('/', (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  const found = db.find(user => {
    return user.username === username && user.password === password
  })
  setTimeout(() => {
    if (found) {
      res.json({ payload: found })
    } else {
      res.json({ payload: 'not found' })
    }
  }, 500)
})

export default router
