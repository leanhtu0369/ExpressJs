const express = require('express')
const multer  = require('multer')

const controller = require('../controllers/user.controllers')
const validate = require('../validate/user.validate')

const router = express.Router()
const upload = multer({ dest: './public/uploads/' })

router.get('/', controller.getList)

router.get('/create', controller.getCreate)

router.post(
  '/create', 
  upload.single('avatar'),
  validate.postCreate, 
  controller.postCreate
  )

router.get('/search', controller.getSearch)

router.get('/:id', controller.getDetail)

module.exports = router
