const mongoose = require('mongoose');
const { string, number } = require('@hapi/joi');

const MessageSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    message_system: {
        type: String,
        required: true
    },

    message_personal: {
        type: string
    },

    status: {
        type: number,
        require: true,
        trim: true
    }
});

const Message = mongoose.model('message', MessageSchema);

module.exports = { Message };

// IMPORT MASTER DATA

const masterData = [
    { key: NOT_FOUND, message_system: 'Can not find', message_personal: '', status: 404 },
    { key: INVALID, message_system: 'Invalid', message_personal: '', status: 400 },
    { key: EXIST, message_system: 'Exist', message_personal: '', status: 400 },
    { key: EXIST, message_system: 'Exist', message_personal: '', status: 400 },
];

Message.insertMany();