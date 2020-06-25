const Joi = require("@hapi/joi");
const {
  _REGEX_MAIL,
  _REGEX_PHONE,
} = require("../../core/Constant/regularExpression.constant");
const { ABORT_EARLY } = require("../../core/configuration/validation.config");

const updateUserValidationSchema = Joi.object().keys({
  name: Joi.string().empty().required().min(2).max(100),
  phone: Joi.string().pattern(new RegExp(_REGEX_PHONE)).message({
    "string.pattern.base": "Phone invalid",
  }),
  email: Joi.string().pattern(new RegExp(_REGEX_MAIL)).message({
    "string.pattern.base": "Email invalid",
  }),
});

const updateUserValidation = (user) => {
  return updateUserValidationSchema.validate(user, ABORT_EARLY);
};

module.exports = { updateUserValidation };
