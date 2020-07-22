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
  can_not_find_product: {
    key: "can_not_find_product",
    status: 404
  },
  product_name_must_be_string : {
    key: "product_name_must_be_string",
    status : 404
  },
  product_name_must_be_required:{
    key: "product_name_must_be_required",
    status: 400
  },
  product_price_must_be_number_type : {
    key: "product_price_must_be_number_type",
    status : 400
  },
  product_price_more_than_0 : {
    key: "product_price_more_than_0",
    status : 400
  },
  product_price_must_be_required : {
    key: "product_price_must_be_required",
    status : 400
  },
  product_promotionPrice_must_be_number_type: {
    key : "product_promotionPrice_must_be_number_type",
    status: 400
  },
  product_promotion_price_more_than_0: {
    key : "product_promotion_price_more_than_0",
    status: 400
  },
  product_description_must_be_string : {
    key : "product_description_must_be_string",
    status: 400
  },
  product_home_flag_must_be_boolean : {
    key : "product_home_flag_must_be_boolean",
    status : 400
  },
  product_hot_flag_must_be_boolean : {
    key : "product_hot_flag_must_be_boolean",
    status : 400
  },
  product_quantity_must_be_number_type : {
    key: "product_quantity_must_be_number_type",
    status : 400
  },
  product_quantity_more_than_0 : {
    key: "product_quantity_more_than_0",
    status : 400
  }
};
