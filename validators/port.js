const { string } = require('joi');
const joi = require('joi');

module.exports = {
	postPort: {
		body: {
			Startes_Majeurs: joi.string().required(),
			Startes_Mineurs: joi.array().items(joi.string()),
			Port: joi.array().items(joi.string()),
		},
	},
};
