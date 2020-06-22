const express = require('express');
const bodyParser = require('body-parser');
const { userRouter } = require('../src/routers/user.route');
const onError = require('./core/middleware/onError.middleware');
const isAuthor = require('./core/middleware/isAuth.middleware');

const app = express();

app.use(bodyParser.json());
// app.use(isAuthor);
app.use(onError);

app.use('/user', userRouter);

module.exports = { app };