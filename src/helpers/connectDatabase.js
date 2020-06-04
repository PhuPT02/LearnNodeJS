const { Uri } = require('../config/connectionString');

const mongoose = require('mongoose');

mongoose.connect(Uri, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
.then(()=> console.log("Database connected !!!"))
.catch(error => {
    console.log(error.message);
    process.exit(1);
});