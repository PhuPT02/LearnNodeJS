exports.errorsResponse = {
  phone_exist: { key: "Phone_Exist", status: 400 },
  email_exist: { key: "Email_Exist", status: 400 },
  can_not_find_user: { key: "Can_Not_Find_User", status: 404 },
  user_invalid: { key: "User_Invalid", status: 400 },
  id_invalid: { key: "Id_Invalid", status: 400 },
  token_missed: { key: "token_missed", status: 400 },
  token_invalid: { key: "token_invalid", status: 400 },
  token_unauthorized: { key: "token_unauthorized", status: 400 },
};
