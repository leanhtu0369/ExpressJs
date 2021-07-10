module.exports.postCreate = function (req, res, next) {
  const errs = []

  if (!req.file) {
    errs.push('Avatar is required')
  }

  // console.log(req.file);
  
  if (!req.body.name) {
    errs.push('Name is required')
  }

  if (!req.body.email) {
    errs.push('Email is required')
  }

  if (!req.body.password) {
    errs.push('Password is required')
  }

  if(errs.length) {
    res.render('users/create', { 
      errs,
      values: req.body
    })
    
    return
  }

  next()
}
