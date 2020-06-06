const mongoose = require('mongoose');
const { MyError } = require('../helpers/myError');

function checkObjectId(...ids) {
    for (let index = 0; index < ids.length; index++) {

        const id = ids[index];
        
        const objectId = mongoose.Types.ObjectId.isValid(id);
        if (!objectId) 
            throw new MyError('INVALID_ID', 400);
    }
}
module.exports = { checkObjectId };