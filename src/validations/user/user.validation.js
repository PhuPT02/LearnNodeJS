const Joi = require("@hapi/joi");

const userValidation = Joi.object().keys({
  name: Joi.string().required().min(5).empty(),
  mail: Joi.string().required().min(5).empty()
});

module.exports = { userValidation };
