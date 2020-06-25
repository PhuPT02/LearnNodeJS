
const uriOnline = "mongodb+srv://learnnodejs:phu147@cluster0-xl21i.mongodb.net/mongodb?retryWrites=true&w=majority";
const uriLocal = "mongodb://localhost:27017/test";

exports.optionsConnectMongo = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}

exports.Uri = uriLocal ;

