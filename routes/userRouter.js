const express = require('express');
const userRouter = express.Router();
const userController = require('./../controllers/userController');

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUsers);
userRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUsers)
  .delete(userController.deleteUser);

module.exports = userRouter;
