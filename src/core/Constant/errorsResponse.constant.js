exports.errorsResponse = {
  phone_exist: { 
    key: "phone_exist", 
    status: 400 
  },
  email_exist: { 
    key: "email_exist", 
    status: 400 
  },
  can_not_find_user: { 
    key: "can_not_find_user", 
    status: 404 
  },
  user_invalid: { 
    key: "user_invalid", 
    status: 400 
  },
  id_invalid: { 
    key: "id_invalid", 
    status: 400 
  },
  token_missed: { 
    key: "token_missed", 
    status: 400 
  },
  token_invalid: { 
    key: "token_invalid", 
    status: 400 
  },
  token_unauthorized: { 
    key: "token_unauthorized", 
    status: 400 
  },
  user_name_must_be_string: { 
    key: "name_must_be_string", 
    status: 400 
  },
  user_name_is_not_empty: { 
    key: "user_name_is_not_empty", 
    status: 400 
  },
  user_name_must_be_required: {
    key: "user_name_must_be_required",
    status: 400,
  },
  user_name_min_length_is_2_characters: {
    key: "user_name_min_length_is_2_characters",
    status: 400,
  },
  user_name_max_length_is_100_characters: {
    key: "user_name_max_length_is_100_characters",
    status: 400,
  },
  user_password_must_be_string: {
    key: "user_password_must_be_string",
    status: 400,
  },
  user_password_must_be_required: {
    key: "user_password_must_be_required",
    status: 400,
  },
  user_password_min_length_is_6_characters: {
    key: "user_password_min_length_is_6_characters",
    status: 400,
  },
  user_password_max_length_is_30_characters: {
    key: "user_password_max_length_is_30_characters",
    status: 400,
  },
  user_phone_invalid: {
    key: "user_phone_invalid",
    status: 400,
  },
  user_email_invalid: {
    key: "user_email_invalid",
    status: 400,
  },
};
