const db = require('../db')
const users = db.get('user').value()

module.exports.getList = function (req, res) {
  res.render('users/index', { users: users })
}

module.exports.getCreate = function (req, res) {
  res.render('users/create')
}

module.exports.postCreate = function (req, res) {
  const newUser = {
    id: users[users.length - 1].id + 1,
    name: req.body.name
  }

  db.get('user').push(newUser).write()

  res.redirect('/users')
}

module.exports.getSearch = function (req, res) {
  const q = req.query.q
  const newUsers = users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
  // console.log(users, newUsers, req.query.q);

  res.render('users/index', { 
    curent: q,
    users: newUsers 
  })
}

module.exports.getDetail = function (req, res) {
  const user = users.find(user => user.id === parseInt(req.params.id))
  res.render('users/view', { user: user })
}
