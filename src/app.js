const express = require('express');
const bodyParser = require('body-parser');

const onError = require('../src/middleware/onError');

const { userRouter } = require('../src/routers/user.route');

const app = express();

app.use(bodyParser.json());
app.use(onError);

app.use('/user', userRouter);

module.exports = { app };