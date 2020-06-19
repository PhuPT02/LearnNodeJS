const mongoose = require('mongoose');
const { app } = require('./app');
const connection = require('./core/configuration/connectionString');

mongoose.connect(connection.Uri, connection.optionsConnectMongo)
    .then(() => {
        console.log("Database connected !");
        app.listen(process.env.PORT || 3000, () => {
            console.log("Server Started !")
        })
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
