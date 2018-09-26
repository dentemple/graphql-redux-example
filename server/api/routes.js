const express = require('express')
const router = express.Router()

router.get('/ping', (_, res) => res.send({ ping: 'ok', route: '/api/ping' }))

router.use('/users', require('../users/routes'))

module.exports = router
