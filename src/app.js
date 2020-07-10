const express = require('express');
const bodyParser = require('body-parser');
const onError = require('./core/middleware/onError.middleware');

const { userRouter } = require('./routers/user.route');
const { productRouter } = require('./routers/product.route');

const app = express();

app.use(bodyParser.json());
app.use(onError);

app.use('/user', userRouter);
app.use('/product',productRouter);

module.exports = { app };