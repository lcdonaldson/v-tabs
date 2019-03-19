const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide an email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password can only be letters or numbers and it must have a minimum of 8 characters, But less than 32.`
          })
          break
        default:
          res.status(400).send({
            error: `Invalid information`
          })
      }
    } else {
      next()
    }
  }
}