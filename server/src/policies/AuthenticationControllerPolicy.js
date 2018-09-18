const Joi = require('joi')

module.exports = {
	register (req, res, next) {
		const schema = {
			username: Joi.string().required(),
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			)
		}

		const {error, value} = Joi.validate(req.body, schema)

		if (error) {
			switch (error.details[0].context.key) {
				case 'username':
					res.status(400).send({
						error: 'Username is required'
					})
					break
				case 'email':
					res.status(400).send({
						error: 'You must provide a valid email address.'
					})
					break
				case 'password':
					res.status(400).send({
						error: `The password provided failed to meet the following rules.
							<br>
							1. Must contain ONLY the following characters: lower case, upper case, & numerics.
							<br>
							2. A minimum of 8 characters is allowed.
							`
					})
					break
				default:
					res.status(400).send({
						error: 'Invalid registration information'
					})
			}
		} else {
			next()
		}
	}
}