const md5 = require('md5');

const User = require('../models/user.model');

module.exports.getList = async function (req, res) {
  const users = await User.find({})
  res.render('users/index', { users: users })
}

module.exports.getCreate = function (req, res) {
  res.render('users/create')
}

module.exports.postCreate = async function (req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
    avatar: req.file.path.split('\\').slice(1).join('/')
  }

  await User.create(newUser);

  res.redirect('/users')
}

module.exports.getSearch = async function (req, res) {
  const q = req.query.q
  const users =  await User.find({})
  const newUsers =  users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)

  res.render('users/index', { 
    curent: q,
    users: newUsers 
  })
}

module.exports.getDetail = async function (req, res) {
  const user = await User.findById(req.params.id).exec()

  res.render('users/view', { user: user })
}
