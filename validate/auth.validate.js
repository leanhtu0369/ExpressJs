const md5 = require('md5');

const db = require('../db')

module.exports.postLogin = function (req, res, next) {
  const email = req.body.email
  const password = req.body.password

  const user = db.get('users').find({ email: email }).value()

  if (!user) {
    res.render('auth/login', { 
      errs: [
        'User does not exist.'
      ],
      values: req.body
    })

    return
  }

  if(md5(password) !== user.password) {
    res.render('auth/login', { 
      errs: [
        'Wrong password.'
      ],
      values: req.body
    })

    return
  }
  
  res.locals.user = user

  next()
}
