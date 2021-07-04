const express = require('express')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = express()
const port = 3000

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ user: [] }).write()
const users = db.get('user').write()

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/users', function (req, res) {
  res.render('users/index', { users: users })
})

app.get('/users/create', function (req, res) {
  res.render('users/create')
})

app.post('/users/create', function (req, res) {
  const newUser = {
    id: users[users.length - 1].id + 1,
    name: req.body.name
  }

  db.get('user').push(newUser).write()

  res.redirect('/users')
})

app.get('/users/search', function (req, res) {
  const q = req.query.q
  const newUsers = users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)

  res.render('users/index', { 
    curent: q,
    users: newUsers 
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
