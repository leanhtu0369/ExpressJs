const db = require('../db')

module.exports.requireAuth = function (req, res, next) {
  const currentUser = db.get('users').find({ id: parseInt(req.signedCookies.userId) }).value()
  
  if (!req.signedCookies.userId || !currentUser) {
    res.redirect('/auth/login')
    return
  }

  res.locals.currentUser = currentUser

  next()
}
