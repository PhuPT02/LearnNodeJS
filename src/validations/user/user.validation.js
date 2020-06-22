const Joi = require("@hapi/joi");

const userValidation = Joi.object().keys({
  name: Joi.string()
    .min(5)
    .error(() => "first message")
    .max(25)
    .error(() => "second message")
    .required()
    .error(() => "third message"),
});

module.exports = { userValidation };
