import _ from 'lodash'
import express from 'express'
import db from '../util/fakeData'

const router = express.Router()

router.post('/', (req, res) => {
  const { username, password } = req.body
  const found = db.find(user => user.username === username && user.password === password)
  if (found) {
    res.json({ payload: found })
  } else {
    res.json('nel prro')
  }
})

export default router
