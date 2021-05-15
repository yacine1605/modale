const express = require('express');
const portController = require('./controller');
const portRouter = express.Router();

portRouter.post('/', portController.addPort);
//.get('/:id', portontroller.getPort)
module.exports = portRouter;
