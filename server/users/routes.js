const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.getAllUsers)

router.get('/ping', (_, res) =>
  res.send({ ping: 'ok', route: '/api/users/ping' })
)

router.post('/create', controller.createUser)

router.get('/user/:username', controller.getUser)

router.patch('/user/:username', controller.updateUser)

/* delete */
router.delete('/user/:username', controller.deleteUser)

module.exports = router
