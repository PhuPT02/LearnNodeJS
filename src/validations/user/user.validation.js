const Joi = require("@hapi/joi");
const {errorsResponse} = require("../../core/Constant/errorsResponse.constant");
const { ABORT_EARLY } = require("../../core/configuration/validation.config");
const {
  _REGEX_MAIL,
  _REGEX_PHONE,
} = require("../../core/Constant/regularExpression.constant");


const userValidationSchema = Joi.object().keys({
  name: Joi.string().empty().required().min(2).max(100).messages({

    "string.base": errorsResponse.user_name_must_be_string.key,
    "string.empty": errorsResponse.user_name_is_not_empty.key,
    "string.required": errorsResponse.user_name_must_be_required.key,
    "string.min": errorsResponse.user_name_min_length_is_2_characters.key,
    "string.max": errorsResponse.user_name_max_length_is_100_characters.key

  }),

  password: Joi.string().required().empty().min(6).max(30).messages({

    "string.base": errorsResponse.user_password_must_be_string.key,
    "string.required": errorsResponse.user_password_must_be_required.key,
    "string.min": errorsResponse.user_password_min_length_is_6_characters.key,
    "string.max": errorsResponse.user_password_max_length_is_30_characters.key

  }),

  phone: Joi.string().pattern(new RegExp(_REGEX_PHONE)).messages({
    "string.pattern.base": errorsResponse.user_phone_invalid.key
  }),

  email: Joi.string().pattern(new RegExp(_REGEX_MAIL)).messages({
    "string.pattern.base": errorsResponse.user_email_invalid.key
  }),

  // is_delete: Joi.boolean(),

  // last_login: Joi.date(),

   is_admin: Joi.boolean(),

  // created_by: Joi.date(),

  // created_at: Joi.date(),

  // update_at: Joi.date(),
});

const userValidation = async (user) => {
  const newError = [];
  const { value,error } = await userValidationSchema.validate(user, ABORT_EARLY);
  for (let index = 0; index < error.details.length; index++) {
    const element = error.details[index];
      newError.push({
        field: element.context.key,
        message: element.message
      })
  }
  return { value: value, error: newError };
};

module.exports = { userValidation };
