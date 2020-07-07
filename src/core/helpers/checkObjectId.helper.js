const mongoose = require('mongoose');
const { errorsResponse } = require('../Constant/errorsResponse.constant');
const { HandleError } = require('./handleError.helper');

async function checkObjectId(...ids) {
    for (let index = 0; index < ids.length; index++) {

        const id = ids[index];

        const objectId = mongoose.Types.ObjectId.isValid(id);
        if (!objectId) {
            const error = errorsResponse.id_invalid;
            throw new HandleError(error.key,error.status);
        }
    }
}

module.exports = { checkObjectId };