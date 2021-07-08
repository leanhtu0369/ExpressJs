const express = require('express')

const controller = require('../controllers/auth.controllers')
const validate = require('../validate/auth.validate')

const router = express.Router()

router.get('/login', controller.getLogin)

router.post('/login', validate.postLogin, controller.postLogin)

module.exports = router
