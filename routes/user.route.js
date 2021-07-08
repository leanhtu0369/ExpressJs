const express = require('express')

const controller = require('../controllers/user.controllers')
const validate = require('../validate/user.validate')

const router = express.Router()

router.get('/', controller.getList)

router.get('/create', controller.getCreate)

router.post('/create', validate.postCreate, controller.postCreate)

router.get('/search', controller.getSearch)

router.get('/:id', controller.getDetail)

module.exports = router
