const express = require("express");
const isAuthor = require("../core/middleware/is_Auth.middleware");
const userController = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.get("/", isAuthor, userController.getAll);
userRouter.post("/", isAuthor, userController.createUser);
userRouter.put("/:id", isAuthor, userController.updateUser);
userRouter.post("/login", userController.login);
userRouter.delete("/:id", isAuthor, userController.removeUser);
module.exports = { userRouter };
