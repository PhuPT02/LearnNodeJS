const messageRepository = require('../repositories/message.repository');

exports.getAll = () => {
    return messageRepository.getAll();
}

exports.getByKey = async (key) => {
    const message = await messageRepository.getByKey(key);
    return {
        message: message.message_personal,
        status: message.status 
    };
}

exports.UpdateMessage = (id, message_personal) => {
    return messageRepository.updateMessage(id, message_personal);
}