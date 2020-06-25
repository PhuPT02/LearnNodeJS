const mongoose = require('mongoose');
const { MyError } = require('./myError.helper');

function checkObjectId(...ids) {
    for (let index = 0; index < ids.length; index++) {

        const id = ids[index];
        
        const objectId = mongoose.Types.ObjectId.isValid(id);
        if (!objectId) 
            throw new MyError('Id invalid', 400);
    }
}
module.exports = { checkObjectId };