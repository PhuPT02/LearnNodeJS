const mongoose = require('mongoose');

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
        type: String
    },

    status: {
        type: Number,
        require: true,
        trim: true
    }
});

const Message = mongoose.model('message', MessageSchema);

module.exports = { Message };

// IMPORT MASTER DATA

const masterData = [
    { key: 'can_not_find_email', message_system: 'Can not find email', message_personal: 'Không tìm thấy Email', status: 404 },
    { key: 'email_exist', message_system: 'Email exist', message_personal: 'Email đã tồn tại', status: 400 },
    { key: 'phone_exist', message_system: 'Phone exist', message_personal: 'Số điện thoại đã tồn tại', status: 400 },
    { key: 'can_not_find_user', message_system: 'Can not find user', message_personal: 'Không tìm thấy tài khoản', status: 404 },
    { key: 'user_invalid', message_system: 'User invalid', message_personal: 'Tài khoản không họp lệ', status: 400 },
    { key: 'id_invalid', message_system: 'Id invalid', message_personal: 'Id không họp lệ', status: 400 },
    { key: 'miss_token', message_system: 'Missing token', message_personal: 'Thiếu token', status: 400 },
    { key: 'unauthorized', message_system: 'Unauthorized', message_personal: 'Không được phép', status: 400 },
    { key: 'unauthorized', message_system: 'Unauthorized', message_personal: 'Không được phép', status: 400 },
    
];

Message.insertMany(masterData);