const { Message } = require('../models/message.model');


exports.getAll = () => {
    return Message.find({});
};

exports.getByKey = (key) => {
    return Message.findOne({ key });;
}

exports.updateMessage = (key, message_personal) => {
    const obj = { message_personal }
    return Message.findOneAndUpdate({ key }, obj);
};
