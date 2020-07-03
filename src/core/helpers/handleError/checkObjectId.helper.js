const mongoose = require('mongoose');
const messageService = require('../../../services/message.service');
const { HandleError } = require('./handleError.helper');

function checkObjectId(...ids) {
    for (let index = 0; index < ids.length; index++) {

        const id = ids[index];

        const objectId = mongoose.Types.ObjectId.isValid(id);
        if (!objectId) {
            const getMessage = messageService.getByKey('');
        }
        throw new HandleError('Id invalid', 400);
    }
}
module.exports = { checkObjectId };