const express = require('express');
const prixController = require('./controller');
//const auth = require('../../../midddleware/auth');
const prixRouter = express.Router();

prixRouter.post('/', prixController.addData);
//.get('/',prixController.getData);
module.exports = prixRouter;
