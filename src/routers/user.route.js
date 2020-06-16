const express = require('express');

const userController = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get('/',userController.getAll);
userRouter.post('/')

module.exports = { userRouter };

