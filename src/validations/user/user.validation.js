const Joi = require("@hapi/joi");
const {
  _REGEX_MAIL,
  _REGEX_PHONE,
} = require("../../core/Constant/regularExpression.constant");
const { ABORT_EARLY } = require("../../core/configuration/validation.config");
const { MyError } = require('../../core/helpers/handleError/myError');

const userValidationSchema = Joi.object().keys({
  name: Joi.string().empty().required().min(2).max(100),
  password: Joi.string().required().empty().min(6).max(30),
  phone: Joi.string().pattern(new RegExp(_REGEX_PHONE)).message({
    "string.pattern.base": "Phone invalid",
  }),
  email: Joi.string().pattern(new RegExp(_REGEX_MAIL)).message({
    "string.pattern.base": "Email invalid",
  }),
  is_delete: Joi.boolean(),
  last_login: Joi.date(),
  is_admin: Joi.boolean(),
  created_by: Joi.date(),
  created_at: Joi.date(),
  update_at: Joi.date(),
});

const userValidation = (user) => {
  const { error } = userValidationSchema.validate(user, ABORT_EARLY);
  if (error) throw MyError(error.details, 400);
};

module.exports = { userValidation };
