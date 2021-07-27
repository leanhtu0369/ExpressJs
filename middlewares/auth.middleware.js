const User = require('../models/user.model');

module.exports.requireAuth = async function (req, res, next) {
  const currentUser = await User.findById(req.signedCookies.userId).exec()
  
  if (!req.signedCookies.userId || !currentUser) {
    res.redirect('/auth/login')
    return
  }

  res.locals.currentUser = currentUser

  next()
}
