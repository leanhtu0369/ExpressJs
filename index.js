const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

const users = [
  { 
    id: 1,
    name: 'Tôi'
  },
  { 
    id: 2,
    name: 'Đây'
  },
]

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/users', function (req, res) {
  res.render('users/index', { users })
})

app.get('/users/search', function (req, res) {
  const q = req.query.q
  const newUsers = users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
  console.log(q, newUsers);

  res.render('users/index', { 
    curent: q,
    users: newUsers 
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
