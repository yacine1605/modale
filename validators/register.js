module.exports = {
	Register: {
		body: {
			dprh: joi.string().required(),
			port: joi.array().items(joi.string()),
			nom: joi.string().required(),
			prenom: joi.string().required(),
			email: joi.string().email().required(),
			username: joi.string().required(),
			password: joi.string().min(8).required(),
		},
	},
};
