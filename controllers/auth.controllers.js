
module.exports.getLogin = function (req, res) {
  res.render('auth/login')
}

module.exports.postLogin = function (req, res) {
  res.cookie('userId', res.locals.user.id, {
    signed: true
  })
  
  res.redirect('/users')
}
