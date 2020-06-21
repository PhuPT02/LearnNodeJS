const mongoose = require('mongoose');
const { app } = require('./app');
const connection = require('./core/configuration/connectionString');
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

mongoose.connect(connection.Uri, connection.optionsConnectMongo)
    .then(() => {
        console.log("Database connected !");
        app.listen(port, host, () => {
            console.log(`Server Started at http://${host}:${port}/`);
        })
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
