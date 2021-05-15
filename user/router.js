const express = require('express');
const userController = require('./controller');
const auth = require('../../../midddleware/auth');
const userRouter = express.Router();

userRouter.post('/signup', userController.signupUser);
userRouter.post('/login', userController.loginUser);
userRouter.get('/info', auth, userController.getInfoUser);
module.exports = userRouter;
