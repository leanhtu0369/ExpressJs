require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const authMiddelware = require('./middlewares/auth.middleware')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const randomStr = Math.random().toString(36).substring(2, 8)
app.use(cookieParser(randomStr))

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use('/auth', authRoute)

app.use('/users', authMiddelware.requireAuth, userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
