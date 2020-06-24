const express = require("express");

const userController = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.get("/", userController.getAll);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.updateUser);
userRouter.post("/login", userController.login);

module.exports = { userRouter };
