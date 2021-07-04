const express = require('express')

const userRoute = require('./routes/user.route')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use('/users', userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
