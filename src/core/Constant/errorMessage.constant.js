const errorResponse = {
    phone_exist : {
        key : 'Phone_Exist',
        status: 400
    },

    email_exist:{
        key:'Email_Exist',
        status: 400
    },

    can_notfind_user:{
        key: 'Can_Not_Find_User',
        status: 404
    },

    user_invalid:{
        key: 'User_Invalid',
        status: 400
    }


}

module.exports = { errorResponse }