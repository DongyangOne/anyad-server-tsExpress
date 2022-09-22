const router = require('express').Router()
const user = require('./user.service')

router.post('/', user.test)

module.exports = router
export {}
