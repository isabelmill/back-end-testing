const express = require('express')
const router = express.Router()
const { getUser, getUsers } = require('./user-controller')

router.get('/', getUsers)
router.get('/:userId', getUser)

module.exports = router