const messageRepository = require('../repositories/message.repository');

exports.getAll = () => {
    return messageRepository.getAll();
}

exports.getById = (key) => {
    return messageRepository.getById(key);
}

exports.UpdateMessage = (id, message_personal) => {
    return messageRepository.updateMessage(id, message_personal);
}